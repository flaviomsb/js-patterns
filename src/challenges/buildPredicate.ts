export type SortDirection = 'ASC' | 'DESC';
export type ComparisonOperator =
  | '='
  | '=='
  | '>'
  | '>='
  | '<'
  | '<='
  | '!='
  | '<>'
  | 'IN';
export type SingleCondition = [string, ComparisonOperator, any, boolean?];

export interface LogicalCondition {
  operator: 'AND' | 'OR';
  limit?: number;
  distinct?: string;
  sort?: [string, SortDirection];
  conditions: (SingleCondition | LogicalCondition)[];
}

export type Conditions = SingleCondition | LogicalCondition;

export function buildPredicate(conditions: Conditions) {
  const args: any[] = [];

  function buildClauses(_conditions: Conditions): string {
    if (Array.isArray(_conditions) && _conditions.length >= 3) {
      const [property, operator, value, applyWhen] = _conditions;

      if (_conditions.length === 4 && !applyWhen) {
        return '';
      }

      args.push(value);

      return `${property} ${operator} $`;
    }

    if (typeof _conditions === 'object') {
      if (!('conditions' in _conditions)) {
        return '';
      }

      const {
        conditions: innerConditions,
        operator,
        distinct,
        sort,
        limit,
      } = _conditions;

      if (!innerConditions) {
        return '';
      }

      const innerClauses = innerConditions
        .map((innerCondition: Conditions) => buildClauses(innerCondition))
        .filter(Boolean);

      if (innerClauses.length > 1) {
        return `(${innerClauses.join(` ${operator} `)})`
          .concat(distinct ? ` DISTINCT(${distinct})` : '')
          .concat(sort ? ` SORT(${sort[0]} ${sort[1]})` : '')
          .concat(limit ? ` LIMIT(${limit})` : '');
      } else if (innerClauses.length === 1) {
        return innerClauses[0];
      }
    }

    return '';
  }

  let index = 0;

  const queryString = buildClauses(conditions).replace(/\$/g, (match) => {
    const param = match + index;
    index++;
    return param;
  });

  return { queryString, args };
}

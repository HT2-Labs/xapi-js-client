import { baseUrl } from '../statementConstants/extensions';

export function extendWithCostCenter(costCenterId?: string) {
  if (costCenterId === undefined) {
    return {};
  }
  return {
    [`${baseUrl}/cost-center-id`]: costCenterId,
  };
}

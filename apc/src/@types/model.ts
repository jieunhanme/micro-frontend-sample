export type Model = {
  modelId: string;
};

export type ModelSearchCondition = {
  fab: string;
  area: string;
  lotCd: string;
  product: string;
  flow: string;
  operation: string;
  eqpId: string;
  recipeId: string;
};

export type ModelControlParameterRowData = {
  fullName: string;
  address: { street: string; city: string };
};

export type ModelControlParameterData = {
  modelName: string;
  rowData: ModelControlParameterRowData[];
};

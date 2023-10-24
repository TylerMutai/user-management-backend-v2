export type CreateUserParams = {
  name: string;
};

export type GetOneUserParams = {
  id: number;
};

export type CreateUserEmployeeProfileParams = {
  userId: number;
  departmentId: number;
  positionId: number;
};

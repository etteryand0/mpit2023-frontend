import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Bytes: any;
  DateTime: any;
  Decimal: any;
  Json: any;
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _avg?: Maybe<CategoryAvgAggregateOutputType>;
  _count?: Maybe<CategoryCountAggregateOutputType>;
  _max?: Maybe<CategoryMaxAggregateOutputType>;
  _min?: Maybe<CategoryMinAggregateOutputType>;
  _sum?: Maybe<CategorySumAggregateOutputType>;
};

export type AggregateDonation = {
  __typename?: 'AggregateDonation';
  _avg?: Maybe<DonationAvgAggregateOutputType>;
  _count?: Maybe<DonationCountAggregateOutputType>;
  _max?: Maybe<DonationMaxAggregateOutputType>;
  _min?: Maybe<DonationMinAggregateOutputType>;
  _sum?: Maybe<DonationSumAggregateOutputType>;
};

export type AggregateKid = {
  __typename?: 'AggregateKid';
  _count?: Maybe<KidCountAggregateOutputType>;
  _max?: Maybe<KidMaxAggregateOutputType>;
  _min?: Maybe<KidMinAggregateOutputType>;
};

export type AggregateProject = {
  __typename?: 'AggregateProject';
  _avg?: Maybe<ProjectAvgAggregateOutputType>;
  _count?: Maybe<ProjectCountAggregateOutputType>;
  _max?: Maybe<ProjectMaxAggregateOutputType>;
  _min?: Maybe<ProjectMinAggregateOutputType>;
  _sum?: Maybe<ProjectSumAggregateOutputType>;
};

export type AggregateProjectCheckPoint = {
  __typename?: 'AggregateProjectCheckPoint';
  _avg?: Maybe<ProjectCheckPointAvgAggregateOutputType>;
  _count?: Maybe<ProjectCheckPointCountAggregateOutputType>;
  _max?: Maybe<ProjectCheckPointMaxAggregateOutputType>;
  _min?: Maybe<ProjectCheckPointMinAggregateOutputType>;
  _sum?: Maybe<ProjectCheckPointSumAggregateOutputType>;
};

export type AggregateReward = {
  __typename?: 'AggregateReward';
  _avg?: Maybe<RewardAvgAggregateOutputType>;
  _count?: Maybe<RewardCountAggregateOutputType>;
  _max?: Maybe<RewardMaxAggregateOutputType>;
  _min?: Maybe<RewardMinAggregateOutputType>;
  _sum?: Maybe<RewardSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Category = {
  __typename?: 'Category';
  _count: CategoryCountOutputType;
  id: Scalars['Int'];
  projects: Array<Project>;
  title: Scalars['String'];
};

export type CategoryProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<ProjectScalarFieldEnum>;
  orderBy?: InputMaybe<ProjectOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type CategoryAvgAggregateOutputType = {
  __typename?: 'CategoryAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type CategoryAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CategoryCountAggregateOutputType = {
  __typename?: 'CategoryCountAggregateOutputType';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
};

export type CategoryCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type CategoryCountOutputType = {
  __typename?: 'CategoryCountOutputType';
  projects: Scalars['Int'];
};

export type CategoryCreateInput = {
  projects?: InputMaybe<ProjectCreateNestedManyWithoutCategoriesInput>;
  title: Scalars['String'];
};

export type CategoryCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type CategoryCreateNestedManyWithoutProjectsInput = {
  connect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<CategoryCreateOrConnectWithoutProjectsInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<CategoryCreateWithoutProjectsInput>>>;
};

export type CategoryCreateOrConnectWithoutProjectsInput = {
  create: CategoryUncheckedCreateWithoutProjectsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutProjectsInput = {
  title: Scalars['String'];
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryMaxAggregateOutputType = {
  __typename?: 'CategoryMaxAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type CategoryMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregateOutputType = {
  __typename?: 'CategoryMinAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type CategoryMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<CategoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<CategorySumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  projects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
};

export enum CategoryScalarFieldEnum {
  Id = 'id',
  Title = 'title',
}

export type CategoryScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CategoryScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CategoryScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryScalarWhereInput>>>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<CategoryScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CategoryScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryScalarWhereWithAggregatesInput>>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type CategorySumAggregateOutputType = {
  __typename?: 'CategorySumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type CategorySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CategoryUncheckedCreateInput = {
  id?: InputMaybe<Scalars['Int']>;
  projects?: InputMaybe<ProjectUncheckedCreateNestedManyWithoutCategoriesInput>;
  title: Scalars['String'];
};

export type CategoryUncheckedCreateNestedManyWithoutProjectsInput = {
  connect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<CategoryCreateOrConnectWithoutProjectsInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<CategoryCreateWithoutProjectsInput>>>;
};

export type CategoryUncheckedCreateWithoutProjectsInput = {
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type CategoryUncheckedUpdateInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUncheckedUpdateManyWithoutCategoriesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUncheckedUpdateManyInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUncheckedUpdateManyWithoutCategoriesInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUncheckedUpdateManyWithoutProjectsNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<CategoryCreateOrConnectWithoutProjectsInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<CategoryCreateWithoutProjectsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CategoryScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<CategoryUpdateWithWhereUniqueWithoutProjectsInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<CategoryUpdateManyWithWhereWithoutProjectsInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<CategoryUpsertWithWhereUniqueWithoutProjectsInput>>
  >;
};

export type CategoryUncheckedUpdateWithoutProjectsInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateInput = {
  projects?: InputMaybe<ProjectUpdateManyWithoutCategoriesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutProjectsInput = {
  data: CategoryUncheckedUpdateManyWithoutCategoriesInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutProjectsNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<CategoryCreateOrConnectWithoutProjectsInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<CategoryCreateWithoutProjectsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CategoryScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<CategoryUpdateWithWhereUniqueWithoutProjectsInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<CategoryUpdateManyWithWhereWithoutProjectsInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<CategoryUpsertWithWhereUniqueWithoutProjectsInput>>
  >;
};

export type CategoryUpdateWithWhereUniqueWithoutProjectsInput = {
  data: CategoryUncheckedUpdateWithoutProjectsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutProjectsInput = {
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutProjectsInput = {
  create: CategoryUncheckedCreateWithoutProjectsInput;
  update: CategoryUncheckedUpdateWithoutProjectsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CategoryWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CategoryWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryWhereInput>>>;
  id?: InputMaybe<IntFilter>;
  projects?: InputMaybe<ProjectListRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type Donation = {
  __typename?: 'Donation';
  amount: Scalars['Int'];
  date: Scalars['DateTime'];
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  project: Project;
  projectId: Scalars['String'];
  reward?: Maybe<Reward>;
  rewardId?: Maybe<Scalars['String']>;
  sender: User;
  senderId: Scalars['String'];
};

export type DonationAvgAggregateOutputType = {
  __typename?: 'DonationAvgAggregateOutputType';
  amount?: Maybe<Scalars['Float']>;
};

export type DonationAvgOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
};

export type DonationCountAggregateOutputType = {
  __typename?: 'DonationCountAggregateOutputType';
  _all: Scalars['Int'];
  amount: Scalars['Int'];
  date: Scalars['Int'];
  id: Scalars['Int'];
  message: Scalars['Int'];
  projectId: Scalars['Int'];
  rewardId: Scalars['Int'];
  senderId: Scalars['Int'];
};

export type DonationCountOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  rewardId?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
};

export type DonationCreateInput = {
  amount: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutDonationsInput;
  reward?: InputMaybe<RewardCreateNestedOneWithoutDonationsInput>;
  sender: UserCreateNestedOneWithoutDonationsInput;
};

export type DonationCreateManyInput = {
  amount: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  rewardId?: InputMaybe<Scalars['String']>;
  senderId: Scalars['String'];
};

export type DonationCreateManyProjectInput = {
  amount: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  rewardId?: InputMaybe<Scalars['String']>;
  senderId: Scalars['String'];
};

export type DonationCreateManyProjectInputEnvelope = {
  data: DonationCreateManyProjectInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DonationCreateManyRewardInput = {
  amount: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  senderId: Scalars['String'];
};

export type DonationCreateManyRewardInputEnvelope = {
  data: DonationCreateManyRewardInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DonationCreateManySenderInput = {
  amount: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  rewardId?: InputMaybe<Scalars['String']>;
};

export type DonationCreateManySenderInputEnvelope = {
  data: DonationCreateManySenderInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DonationCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<DonationCreateOrConnectWithoutProjectInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<DonationCreateWithoutProjectInput>>>;
  createMany?: InputMaybe<DonationCreateManyProjectInputEnvelope>;
};

export type DonationCreateNestedManyWithoutRewardInput = {
  connect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<DonationCreateOrConnectWithoutRewardInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<DonationCreateWithoutRewardInput>>>;
  createMany?: InputMaybe<DonationCreateManyRewardInputEnvelope>;
};

export type DonationCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<DonationCreateOrConnectWithoutSenderInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<DonationCreateWithoutSenderInput>>>;
  createMany?: InputMaybe<DonationCreateManySenderInputEnvelope>;
};

export type DonationCreateOrConnectWithoutProjectInput = {
  create: DonationUncheckedCreateWithoutProjectInput;
  where: DonationWhereUniqueInput;
};

export type DonationCreateOrConnectWithoutRewardInput = {
  create: DonationUncheckedCreateWithoutRewardInput;
  where: DonationWhereUniqueInput;
};

export type DonationCreateOrConnectWithoutSenderInput = {
  create: DonationUncheckedCreateWithoutSenderInput;
  where: DonationWhereUniqueInput;
};

export type DonationCreateWithoutProjectInput = {
  amount: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  reward?: InputMaybe<RewardCreateNestedOneWithoutDonationsInput>;
  sender: UserCreateNestedOneWithoutDonationsInput;
};

export type DonationCreateWithoutRewardInput = {
  amount: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutDonationsInput;
  sender: UserCreateNestedOneWithoutDonationsInput;
};

export type DonationCreateWithoutSenderInput = {
  amount: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutDonationsInput;
  reward?: InputMaybe<RewardCreateNestedOneWithoutDonationsInput>;
};

export type DonationListRelationFilter = {
  every?: InputMaybe<DonationWhereInput>;
  none?: InputMaybe<DonationWhereInput>;
  some?: InputMaybe<DonationWhereInput>;
};

export type DonationMaxAggregateOutputType = {
  __typename?: 'DonationMaxAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  rewardId?: Maybe<Scalars['String']>;
  senderId?: Maybe<Scalars['String']>;
};

export type DonationMaxOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  rewardId?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
};

export type DonationMinAggregateOutputType = {
  __typename?: 'DonationMinAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  rewardId?: Maybe<Scalars['String']>;
  senderId?: Maybe<Scalars['String']>;
};

export type DonationMinOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  rewardId?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
};

export type DonationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DonationOrderByWithAggregationInput = {
  _avg?: InputMaybe<DonationAvgOrderByAggregateInput>;
  _count?: InputMaybe<DonationCountOrderByAggregateInput>;
  _max?: InputMaybe<DonationMaxOrderByAggregateInput>;
  _min?: InputMaybe<DonationMinOrderByAggregateInput>;
  _sum?: InputMaybe<DonationSumOrderByAggregateInput>;
  amount?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  rewardId?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
};

export type DonationOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  reward?: InputMaybe<RewardOrderByWithRelationInput>;
  rewardId?: InputMaybe<SortOrder>;
  sender?: InputMaybe<UserOrderByWithRelationInput>;
  senderId?: InputMaybe<SortOrder>;
};

export enum DonationScalarFieldEnum {
  Amount = 'amount',
  Date = 'date',
  Id = 'id',
  Message = 'message',
  ProjectId = 'projectId',
  RewardId = 'rewardId',
  SenderId = 'senderId',
}

export type DonationScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<DonationScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DonationScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DonationScalarWhereInput>>>;
  amount?: InputMaybe<IntFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringNullableFilter>;
  projectId?: InputMaybe<StringFilter>;
  rewardId?: InputMaybe<StringNullableFilter>;
  senderId?: InputMaybe<StringFilter>;
};

export type DonationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<DonationScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DonationScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DonationScalarWhereWithAggregatesInput>>>;
  amount?: InputMaybe<IntWithAggregatesFilter>;
  date?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  message?: InputMaybe<StringNullableWithAggregatesFilter>;
  projectId?: InputMaybe<StringWithAggregatesFilter>;
  rewardId?: InputMaybe<StringNullableWithAggregatesFilter>;
  senderId?: InputMaybe<StringWithAggregatesFilter>;
};

export type DonationSumAggregateOutputType = {
  __typename?: 'DonationSumAggregateOutputType';
  amount?: Maybe<Scalars['Int']>;
};

export type DonationSumOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
};

export type DonationUncheckedCreateInput = {
  amount: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  rewardId?: InputMaybe<Scalars['String']>;
  senderId: Scalars['String'];
};

export type DonationUncheckedCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<DonationCreateOrConnectWithoutProjectInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<DonationCreateWithoutProjectInput>>>;
  createMany?: InputMaybe<DonationCreateManyProjectInputEnvelope>;
};

export type DonationUncheckedCreateNestedManyWithoutRewardInput = {
  connect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<DonationCreateOrConnectWithoutRewardInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<DonationCreateWithoutRewardInput>>>;
  createMany?: InputMaybe<DonationCreateManyRewardInputEnvelope>;
};

export type DonationUncheckedCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<DonationCreateOrConnectWithoutSenderInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<DonationCreateWithoutSenderInput>>>;
  createMany?: InputMaybe<DonationCreateManySenderInputEnvelope>;
};

export type DonationUncheckedCreateWithoutProjectInput = {
  amount: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  rewardId?: InputMaybe<Scalars['String']>;
  senderId: Scalars['String'];
};

export type DonationUncheckedCreateWithoutRewardInput = {
  amount: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  senderId: Scalars['String'];
};

export type DonationUncheckedCreateWithoutSenderInput = {
  amount: Scalars['Int'];
  date?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  rewardId?: InputMaybe<Scalars['String']>;
};

export type DonationUncheckedUpdateInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projectId?: InputMaybe<StringFieldUpdateOperationsInput>;
  rewardId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  senderId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DonationUncheckedUpdateManyInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projectId?: InputMaybe<StringFieldUpdateOperationsInput>;
  rewardId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  senderId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DonationUncheckedUpdateManyWithoutDonationsInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projectId?: InputMaybe<StringFieldUpdateOperationsInput>;
  senderId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DonationUncheckedUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<DonationCreateOrConnectWithoutProjectInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<DonationCreateWithoutProjectInput>>>;
  createMany?: InputMaybe<DonationCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DonationScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<DonationUpdateWithWhereUniqueWithoutProjectInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<DonationUpdateManyWithWhereWithoutProjectInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<DonationUpsertWithWhereUniqueWithoutProjectInput>>
  >;
};

export type DonationUncheckedUpdateManyWithoutRewardNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<DonationCreateOrConnectWithoutRewardInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<DonationCreateWithoutRewardInput>>>;
  createMany?: InputMaybe<DonationCreateManyRewardInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DonationScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<DonationUpdateWithWhereUniqueWithoutRewardInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<DonationUpdateManyWithWhereWithoutRewardInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<DonationUpsertWithWhereUniqueWithoutRewardInput>>
  >;
};

export type DonationUncheckedUpdateManyWithoutSenderNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<DonationCreateOrConnectWithoutSenderInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<DonationCreateWithoutSenderInput>>>;
  createMany?: InputMaybe<DonationCreateManySenderInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DonationScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<DonationUpdateWithWhereUniqueWithoutSenderInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<DonationUpdateManyWithWhereWithoutSenderInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<DonationUpsertWithWhereUniqueWithoutSenderInput>>
  >;
};

export type DonationUncheckedUpdateWithoutProjectInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rewardId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  senderId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DonationUncheckedUpdateWithoutRewardInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projectId?: InputMaybe<StringFieldUpdateOperationsInput>;
  senderId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DonationUncheckedUpdateWithoutSenderInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  projectId?: InputMaybe<StringFieldUpdateOperationsInput>;
  rewardId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DonationUpdateInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutDonationsNestedInput>;
  reward?: InputMaybe<RewardUpdateOneWithoutDonationsNestedInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutDonationsNestedInput>;
};

export type DonationUpdateManyMutationInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DonationUpdateManyWithWhereWithoutProjectInput = {
  data: DonationUncheckedUpdateManyWithoutDonationsInput;
  where: DonationScalarWhereInput;
};

export type DonationUpdateManyWithWhereWithoutRewardInput = {
  data: DonationUncheckedUpdateManyWithoutDonationsInput;
  where: DonationScalarWhereInput;
};

export type DonationUpdateManyWithWhereWithoutSenderInput = {
  data: DonationUncheckedUpdateManyWithoutDonationsInput;
  where: DonationScalarWhereInput;
};

export type DonationUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<DonationCreateOrConnectWithoutProjectInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<DonationCreateWithoutProjectInput>>>;
  createMany?: InputMaybe<DonationCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DonationScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<DonationUpdateWithWhereUniqueWithoutProjectInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<DonationUpdateManyWithWhereWithoutProjectInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<DonationUpsertWithWhereUniqueWithoutProjectInput>>
  >;
};

export type DonationUpdateManyWithoutRewardNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<DonationCreateOrConnectWithoutRewardInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<DonationCreateWithoutRewardInput>>>;
  createMany?: InputMaybe<DonationCreateManyRewardInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DonationScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<DonationUpdateWithWhereUniqueWithoutRewardInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<DonationUpdateManyWithWhereWithoutRewardInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<DonationUpsertWithWhereUniqueWithoutRewardInput>>
  >;
};

export type DonationUpdateManyWithoutSenderNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<DonationCreateOrConnectWithoutSenderInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<DonationCreateWithoutSenderInput>>>;
  createMany?: InputMaybe<DonationCreateManySenderInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DonationScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DonationWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<DonationUpdateWithWhereUniqueWithoutSenderInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<DonationUpdateManyWithWhereWithoutSenderInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<DonationUpsertWithWhereUniqueWithoutSenderInput>>
  >;
};

export type DonationUpdateWithWhereUniqueWithoutProjectInput = {
  data: DonationUncheckedUpdateWithoutProjectInput;
  where: DonationWhereUniqueInput;
};

export type DonationUpdateWithWhereUniqueWithoutRewardInput = {
  data: DonationUncheckedUpdateWithoutRewardInput;
  where: DonationWhereUniqueInput;
};

export type DonationUpdateWithWhereUniqueWithoutSenderInput = {
  data: DonationUncheckedUpdateWithoutSenderInput;
  where: DonationWhereUniqueInput;
};

export type DonationUpdateWithoutProjectInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  reward?: InputMaybe<RewardUpdateOneWithoutDonationsNestedInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutDonationsNestedInput>;
};

export type DonationUpdateWithoutRewardInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutDonationsNestedInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutDonationsNestedInput>;
};

export type DonationUpdateWithoutSenderInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutDonationsNestedInput>;
  reward?: InputMaybe<RewardUpdateOneWithoutDonationsNestedInput>;
};

export type DonationUpsertWithWhereUniqueWithoutProjectInput = {
  create: DonationUncheckedCreateWithoutProjectInput;
  update: DonationUncheckedUpdateWithoutProjectInput;
  where: DonationWhereUniqueInput;
};

export type DonationUpsertWithWhereUniqueWithoutRewardInput = {
  create: DonationUncheckedCreateWithoutRewardInput;
  update: DonationUncheckedUpdateWithoutRewardInput;
  where: DonationWhereUniqueInput;
};

export type DonationUpsertWithWhereUniqueWithoutSenderInput = {
  create: DonationUncheckedCreateWithoutSenderInput;
  update: DonationUncheckedUpdateWithoutSenderInput;
  where: DonationWhereUniqueInput;
};

export type DonationWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<DonationWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DonationWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DonationWhereInput>>>;
  amount?: InputMaybe<IntFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringNullableFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  reward?: InputMaybe<RewardWhereInput>;
  rewardId?: InputMaybe<StringNullableFilter>;
  sender?: InputMaybe<UserWhereInput>;
  senderId?: InputMaybe<StringFilter>;
};

export type DonationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Kid = {
  __typename?: 'Kid';
  _count: KidCountOutputType;
  avatar?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  links: Array<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  projects: Array<Project>;
};

export type KidProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<ProjectScalarFieldEnum>;
  orderBy?: InputMaybe<ProjectOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type KidCountAggregateOutputType = {
  __typename?: 'KidCountAggregateOutputType';
  _all: Scalars['Int'];
  avatar: Scalars['Int'];
  biography: Scalars['Int'];
  id: Scalars['Int'];
  links: Scalars['Int'];
  location: Scalars['Int'];
  name: Scalars['Int'];
};

export type KidCountOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  biography?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  links?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type KidCountOutputType = {
  __typename?: 'KidCountOutputType';
  projects: Scalars['Int'];
};

export type KidCreateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projects?: InputMaybe<ProjectCreateNestedManyWithoutKidInput>;
};

export type KidCreateManyInput = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type KidCreateNestedOneWithoutProjectsInput = {
  connect?: InputMaybe<KidWhereUniqueInput>;
  connectOrCreate?: InputMaybe<KidCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<KidUncheckedCreateWithoutProjectsInput>;
};

export type KidCreateOrConnectWithoutProjectsInput = {
  create: KidUncheckedCreateWithoutProjectsInput;
  where: KidWhereUniqueInput;
};

export type KidCreateWithoutProjectsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type KidCreatelinksInput = {
  set: Scalars['String'];
};

export type KidMaxAggregateOutputType = {
  __typename?: 'KidMaxAggregateOutputType';
  avatar?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type KidMaxOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  biography?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type KidMinAggregateOutputType = {
  __typename?: 'KidMinAggregateOutputType';
  avatar?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type KidMinOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  biography?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type KidOrderByWithAggregationInput = {
  _count?: InputMaybe<KidCountOrderByAggregateInput>;
  _max?: InputMaybe<KidMaxOrderByAggregateInput>;
  _min?: InputMaybe<KidMinOrderByAggregateInput>;
  avatar?: InputMaybe<SortOrder>;
  biography?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  links?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type KidOrderByWithRelationInput = {
  avatar?: InputMaybe<SortOrder>;
  biography?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  links?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  projects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
};

export type KidRelationFilter = {
  is?: InputMaybe<KidWhereInput>;
  isNot?: InputMaybe<KidWhereInput>;
};

export enum KidScalarFieldEnum {
  Avatar = 'avatar',
  Biography = 'biography',
  Id = 'id',
  Links = 'links',
  Location = 'location',
  Name = 'name',
}

export type KidScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<KidScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<KidScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<KidScalarWhereWithAggregatesInput>>>;
  avatar?: InputMaybe<StringNullableWithAggregatesFilter>;
  biography?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  links?: InputMaybe<StringNullableListFilter>;
  location?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type KidUncheckedCreateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projects?: InputMaybe<ProjectUncheckedCreateNestedManyWithoutKidInput>;
};

export type KidUncheckedCreateWithoutProjectsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type KidUncheckedUpdateInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  biography?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUncheckedUpdateManyWithoutKidNestedInput>;
};

export type KidUncheckedUpdateManyInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  biography?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type KidUncheckedUpdateWithoutProjectsInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  biography?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type KidUpdateInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  biography?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutKidNestedInput>;
};

export type KidUpdateManyMutationInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  biography?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type KidUpdateOneRequiredWithoutProjectsNestedInput = {
  connect?: InputMaybe<KidWhereUniqueInput>;
  connectOrCreate?: InputMaybe<KidCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<KidUncheckedCreateWithoutProjectsInput>;
  update?: InputMaybe<KidUncheckedUpdateWithoutProjectsInput>;
  upsert?: InputMaybe<KidUpsertWithoutProjectsInput>;
};

export type KidUpdateWithoutProjectsInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  biography?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  links?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type KidUpdatelinksInput = {
  push?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type KidUpsertWithoutProjectsInput = {
  create: KidUncheckedCreateWithoutProjectsInput;
  update: KidUncheckedUpdateWithoutProjectsInput;
};

export type KidWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<KidWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<KidWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<KidWhereInput>>>;
  avatar?: InputMaybe<StringNullableFilter>;
  biography?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  links?: InputMaybe<StringNullableListFilter>;
  location?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  projects?: InputMaybe<ProjectListRelationFilter>;
};

export type KidWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addProject: Project;
  createOneCategory: Category;
  createOneDonation: Donation;
  createOneKid: Kid;
  createOneProject: Project;
  createOneProjectCheckPoint: ProjectCheckPoint;
  createOneReward: Reward;
  createOneUser: User;
  deleteManyCategory: BatchPayload;
  deleteManyDonation: BatchPayload;
  deleteManyKid: BatchPayload;
  deleteManyProject: BatchPayload;
  deleteManyProjectCheckPoint: BatchPayload;
  deleteManyReward: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneCategory?: Maybe<Category>;
  deleteOneDonation?: Maybe<Donation>;
  deleteOneKid?: Maybe<Kid>;
  deleteOneProject?: Maybe<Project>;
  deleteOneProjectCheckPoint?: Maybe<ProjectCheckPoint>;
  deleteOneReward?: Maybe<Reward>;
  deleteOneUser?: Maybe<User>;
  login?: Maybe<Token>;
  signup: Token;
  updateManyCategory: BatchPayload;
  updateManyDonation: BatchPayload;
  updateManyKid: BatchPayload;
  updateManyProject: BatchPayload;
  updateManyProjectCheckPoint: BatchPayload;
  updateManyReward: BatchPayload;
  updateManyUser: BatchPayload;
  updateOneCategory: Category;
  updateOneDonation: Donation;
  updateOneKid: Kid;
  updateOneProject: Project;
  updateOneProjectCheckPoint: ProjectCheckPoint;
  updateOneReward: Reward;
  updateOneUser: User;
  upsertOneCategory: Category;
  upsertOneDonation: Donation;
  upsertOneKid: Kid;
  upsertOneProject: Project;
  upsertOneProjectCheckPoint: ProjectCheckPoint;
  upsertOneReward: Reward;
  upsertOneUser: User;
};

export type MutationAddProjectArgs = {
  data: ProjectCreateInput;
};

export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};

export type MutationCreateOneDonationArgs = {
  data: DonationCreateInput;
};

export type MutationCreateOneKidArgs = {
  data: KidCreateInput;
};

export type MutationCreateOneProjectArgs = {
  data: ProjectCreateInput;
};

export type MutationCreateOneProjectCheckPointArgs = {
  data: ProjectCheckPointCreateInput;
};

export type MutationCreateOneRewardArgs = {
  data: RewardCreateInput;
};

export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteManyCategoryArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};

export type MutationDeleteManyDonationArgs = {
  where?: InputMaybe<DonationWhereInput>;
};

export type MutationDeleteManyKidArgs = {
  where?: InputMaybe<KidWhereInput>;
};

export type MutationDeleteManyProjectArgs = {
  where?: InputMaybe<ProjectWhereInput>;
};

export type MutationDeleteManyProjectCheckPointArgs = {
  where?: InputMaybe<ProjectCheckPointWhereInput>;
};

export type MutationDeleteManyRewardArgs = {
  where?: InputMaybe<RewardWhereInput>;
};

export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};

export type MutationDeleteOneDonationArgs = {
  where: DonationWhereUniqueInput;
};

export type MutationDeleteOneKidArgs = {
  where: KidWhereUniqueInput;
};

export type MutationDeleteOneProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type MutationDeleteOneProjectCheckPointArgs = {
  where: ProjectCheckPointWhereUniqueInput;
};

export type MutationDeleteOneRewardArgs = {
  where: RewardWhereUniqueInput;
};

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationLoginArgs = {
  data?: InputMaybe<SignInInput>;
};

export type MutationSignupArgs = {
  data: SignUpInput;
};

export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type MutationUpdateManyDonationArgs = {
  data: DonationUpdateManyMutationInput;
  where?: InputMaybe<DonationWhereInput>;
};

export type MutationUpdateManyKidArgs = {
  data: KidUpdateManyMutationInput;
  where?: InputMaybe<KidWhereInput>;
};

export type MutationUpdateManyProjectArgs = {
  data: ProjectUpdateManyMutationInput;
  where?: InputMaybe<ProjectWhereInput>;
};

export type MutationUpdateManyProjectCheckPointArgs = {
  data: ProjectCheckPointUpdateManyMutationInput;
  where?: InputMaybe<ProjectCheckPointWhereInput>;
};

export type MutationUpdateManyRewardArgs = {
  data: RewardUpdateManyMutationInput;
  where?: InputMaybe<RewardWhereInput>;
};

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type MutationUpdateOneDonationArgs = {
  data: DonationUpdateInput;
  where: DonationWhereUniqueInput;
};

export type MutationUpdateOneKidArgs = {
  data: KidUpdateInput;
  where: KidWhereUniqueInput;
};

export type MutationUpdateOneProjectArgs = {
  data: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type MutationUpdateOneProjectCheckPointArgs = {
  data: ProjectCheckPointUpdateInput;
  where: ProjectCheckPointWhereUniqueInput;
};

export type MutationUpdateOneRewardArgs = {
  data: RewardUpdateInput;
  where: RewardWhereUniqueInput;
};

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpsertOneCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type MutationUpsertOneDonationArgs = {
  create: DonationCreateInput;
  update: DonationUpdateInput;
  where: DonationWhereUniqueInput;
};

export type MutationUpsertOneKidArgs = {
  create: KidCreateInput;
  update: KidUpdateInput;
  where: KidWhereUniqueInput;
};

export type MutationUpsertOneProjectArgs = {
  create: ProjectCreateInput;
  update: ProjectUpdateInput;
  where: ProjectWhereUniqueInput;
};

export type MutationUpsertOneProjectCheckPointArgs = {
  create: ProjectCheckPointCreateInput;
  update: ProjectCheckPointUpdateInput;
  where: ProjectCheckPointWhereUniqueInput;
};

export type MutationUpsertOneRewardArgs = {
  create: RewardCreateInput;
  update: RewardUpdateInput;
  where: RewardWhereUniqueInput;
};

export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  _count: ProjectCountOutputType;
  categories: Array<Category>;
  checkpoints: Array<ProjectCheckPoint>;
  collectedAmount: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  donations: Array<Donation>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id: Scalars['String'];
  kid: Kid;
  kidId: Scalars['String'];
  likes: Array<User>;
  owner: User;
  ownerId: Scalars['String'];
  promo_media: Scalars['String'];
  published: Scalars['Boolean'];
  rewards: Array<Reward>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<CategoryScalarFieldEnum>;
  orderBy?: InputMaybe<CategoryOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type ProjectCheckpointsArgs = {
  cursor?: InputMaybe<ProjectCheckPointWhereUniqueInput>;
  distinct?: InputMaybe<ProjectCheckPointScalarFieldEnum>;
  orderBy?: InputMaybe<ProjectCheckPointOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectCheckPointWhereInput>;
};

export type ProjectDonationsArgs = {
  cursor?: InputMaybe<DonationWhereUniqueInput>;
  distinct?: InputMaybe<DonationScalarFieldEnum>;
  orderBy?: InputMaybe<DonationOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DonationWhereInput>;
};

export type ProjectLikesArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<UserScalarFieldEnum>;
  orderBy?: InputMaybe<UserOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type ProjectRewardsArgs = {
  cursor?: InputMaybe<RewardWhereUniqueInput>;
  distinct?: InputMaybe<RewardScalarFieldEnum>;
  orderBy?: InputMaybe<RewardOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RewardWhereInput>;
};

export type ProjectAvgAggregateOutputType = {
  __typename?: 'ProjectAvgAggregateOutputType';
  collectedAmount?: Maybe<Scalars['Float']>;
  goal?: Maybe<Scalars['Float']>;
};

export type ProjectAvgOrderByAggregateInput = {
  collectedAmount?: InputMaybe<SortOrder>;
  goal?: InputMaybe<SortOrder>;
};

export type ProjectCheckPoint = {
  __typename?: 'ProjectCheckPoint';
  description?: Maybe<Scalars['String']>;
  goal: Scalars['Int'];
  id: Scalars['String'];
  project: Project;
  projectId: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCheckPointAvgAggregateOutputType = {
  __typename?: 'ProjectCheckPointAvgAggregateOutputType';
  goal?: Maybe<Scalars['Float']>;
};

export type ProjectCheckPointAvgOrderByAggregateInput = {
  goal?: InputMaybe<SortOrder>;
};

export type ProjectCheckPointCountAggregateOutputType = {
  __typename?: 'ProjectCheckPointCountAggregateOutputType';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  goal: Scalars['Int'];
  id: Scalars['Int'];
  projectId: Scalars['Int'];
  title: Scalars['Int'];
};

export type ProjectCheckPointCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  goal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ProjectCheckPointCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutCheckpointsInput;
  title: Scalars['String'];
};

export type ProjectCheckPointCreateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCheckPointCreateManyProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ProjectCheckPointCreateManyProjectInputEnvelope = {
  data: ProjectCheckPointCreateManyProjectInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectCheckPointCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointCreateOrConnectWithoutProjectInput>>
  >;
  create?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointCreateWithoutProjectInput>>
  >;
  createMany?: InputMaybe<ProjectCheckPointCreateManyProjectInputEnvelope>;
};

export type ProjectCheckPointCreateOrConnectWithoutProjectInput = {
  create: ProjectCheckPointUncheckedCreateWithoutProjectInput;
  where: ProjectCheckPointWhereUniqueInput;
};

export type ProjectCheckPointCreateWithoutProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ProjectCheckPointListRelationFilter = {
  every?: InputMaybe<ProjectCheckPointWhereInput>;
  none?: InputMaybe<ProjectCheckPointWhereInput>;
  some?: InputMaybe<ProjectCheckPointWhereInput>;
};

export type ProjectCheckPointMaxAggregateOutputType = {
  __typename?: 'ProjectCheckPointMaxAggregateOutputType';
  description?: Maybe<Scalars['String']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectCheckPointMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  goal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ProjectCheckPointMinAggregateOutputType = {
  __typename?: 'ProjectCheckPointMinAggregateOutputType';
  description?: Maybe<Scalars['String']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectCheckPointMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  goal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ProjectCheckPointOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProjectCheckPointOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProjectCheckPointAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProjectCheckPointCountOrderByAggregateInput>;
  _max?: InputMaybe<ProjectCheckPointMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProjectCheckPointMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProjectCheckPointSumOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  goal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ProjectCheckPointOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  goal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export enum ProjectCheckPointScalarFieldEnum {
  Description = 'description',
  Goal = 'goal',
  Id = 'id',
  ProjectId = 'projectId',
  Title = 'title',
}

export type ProjectCheckPointScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProjectCheckPointScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ProjectCheckPointScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectCheckPointScalarWhereInput>>>;
  description?: InputMaybe<StringNullableFilter>;
  goal?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  projectId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProjectCheckPointScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointScalarWhereWithAggregatesInput>>
  >;
  NOT?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointScalarWhereWithAggregatesInput>>
  >;
  OR?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointScalarWhereWithAggregatesInput>>
  >;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  goal?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  projectId?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProjectCheckPointSumAggregateOutputType = {
  __typename?: 'ProjectCheckPointSumAggregateOutputType';
  goal?: Maybe<Scalars['Int']>;
};

export type ProjectCheckPointSumOrderByAggregateInput = {
  goal?: InputMaybe<SortOrder>;
};

export type ProjectCheckPointUncheckedCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  projectId: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCheckPointUncheckedCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointCreateOrConnectWithoutProjectInput>>
  >;
  create?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointCreateWithoutProjectInput>>
  >;
  createMany?: InputMaybe<ProjectCheckPointCreateManyProjectInputEnvelope>;
};

export type ProjectCheckPointUncheckedCreateWithoutProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ProjectCheckPointUncheckedUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  projectId?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectCheckPointUncheckedUpdateManyInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  projectId?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectCheckPointUncheckedUpdateManyWithoutCheckpointsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectCheckPointUncheckedUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointCreateOrConnectWithoutProjectInput>>
  >;
  create?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointCreateWithoutProjectInput>>
  >;
  createMany?: InputMaybe<ProjectCheckPointCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ProjectCheckPointScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointUpdateWithWhereUniqueWithoutProjectInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointUpdateManyWithWhereWithoutProjectInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointUpsertWithWhereUniqueWithoutProjectInput>>
  >;
};

export type ProjectCheckPointUncheckedUpdateWithoutProjectInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectCheckPointUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutCheckpointsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectCheckPointUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectCheckPointUpdateManyWithWhereWithoutProjectInput = {
  data: ProjectCheckPointUncheckedUpdateManyWithoutCheckpointsInput;
  where: ProjectCheckPointScalarWhereInput;
};

export type ProjectCheckPointUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointCreateOrConnectWithoutProjectInput>>
  >;
  create?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointCreateWithoutProjectInput>>
  >;
  createMany?: InputMaybe<ProjectCheckPointCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ProjectCheckPointScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointUpdateWithWhereUniqueWithoutProjectInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointUpdateManyWithWhereWithoutProjectInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointUpsertWithWhereUniqueWithoutProjectInput>>
  >;
};

export type ProjectCheckPointUpdateWithWhereUniqueWithoutProjectInput = {
  data: ProjectCheckPointUncheckedUpdateWithoutProjectInput;
  where: ProjectCheckPointWhereUniqueInput;
};

export type ProjectCheckPointUpdateWithoutProjectInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectCheckPointUpsertWithWhereUniqueWithoutProjectInput = {
  create: ProjectCheckPointUncheckedCreateWithoutProjectInput;
  update: ProjectCheckPointUncheckedUpdateWithoutProjectInput;
  where: ProjectCheckPointWhereUniqueInput;
};

export type ProjectCheckPointWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectCheckPointWhereInput>>>;
  description?: InputMaybe<StringNullableFilter>;
  goal?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProjectCheckPointWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ProjectCountAggregateOutputType = {
  __typename?: 'ProjectCountAggregateOutputType';
  _all: Scalars['Int'];
  collectedAmount: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  dueDate: Scalars['Int'];
  goal: Scalars['Int'];
  id: Scalars['Int'];
  kidId: Scalars['Int'];
  ownerId: Scalars['Int'];
  promo_media: Scalars['Int'];
  published: Scalars['Int'];
  short_description: Scalars['Int'];
  title: Scalars['Int'];
};

export type ProjectCountOrderByAggregateInput = {
  collectedAmount?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  goal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kidId?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  promo_media?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  short_description?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ProjectCountOutputType = {
  __typename?: 'ProjectCountOutputType';
  categories: Scalars['Int'];
  checkpoints: Scalars['Int'];
  donations: Scalars['Int'];
  likes: Scalars['Int'];
  rewards: Scalars['Int'];
};

export type ProjectCreateInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutProjectsInput>;
  checkpoints?: InputMaybe<ProjectCheckPointCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kid: KidCreateNestedOneWithoutProjectsInput;
  likes?: InputMaybe<UserCreateNestedManyWithoutLikedInput>;
  owner: UserCreateNestedOneWithoutProjectsInput;
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCreateManyInput = {
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kidId: Scalars['String'];
  ownerId: Scalars['String'];
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCreateManyKidInput = {
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  ownerId: Scalars['String'];
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCreateManyKidInputEnvelope = {
  data: ProjectCreateManyKidInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectCreateManyOwnerInput = {
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kidId: Scalars['String'];
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCreateManyOwnerInputEnvelope = {
  data: ProjectCreateManyOwnerInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ProjectCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutCategoriesInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutCategoriesInput>>>;
};

export type ProjectCreateNestedManyWithoutKidInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutKidInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutKidInput>>>;
  createMany?: InputMaybe<ProjectCreateManyKidInputEnvelope>;
};

export type ProjectCreateNestedManyWithoutLikesInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutLikesInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutLikesInput>>>;
};

export type ProjectCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutOwnerInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutOwnerInput>>>;
  createMany?: InputMaybe<ProjectCreateManyOwnerInputEnvelope>;
};

export type ProjectCreateNestedOneWithoutCheckpointsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutCheckpointsInput>;
  create?: InputMaybe<ProjectUncheckedCreateWithoutCheckpointsInput>;
};

export type ProjectCreateNestedOneWithoutDonationsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutDonationsInput>;
  create?: InputMaybe<ProjectUncheckedCreateWithoutDonationsInput>;
};

export type ProjectCreateNestedOneWithoutRewardsInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutRewardsInput>;
  create?: InputMaybe<ProjectUncheckedCreateWithoutRewardsInput>;
};

export type ProjectCreateOrConnectWithoutCategoriesInput = {
  create: ProjectUncheckedCreateWithoutCategoriesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutCheckpointsInput = {
  create: ProjectUncheckedCreateWithoutCheckpointsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutDonationsInput = {
  create: ProjectUncheckedCreateWithoutDonationsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutKidInput = {
  create: ProjectUncheckedCreateWithoutKidInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutLikesInput = {
  create: ProjectUncheckedCreateWithoutLikesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutOwnerInput = {
  create: ProjectUncheckedCreateWithoutOwnerInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateOrConnectWithoutRewardsInput = {
  create: ProjectUncheckedCreateWithoutRewardsInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutCategoriesInput = {
  checkpoints?: InputMaybe<ProjectCheckPointCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kid: KidCreateNestedOneWithoutProjectsInput;
  likes?: InputMaybe<UserCreateNestedManyWithoutLikedInput>;
  owner: UserCreateNestedOneWithoutProjectsInput;
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCreateWithoutCheckpointsInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutProjectsInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kid: KidCreateNestedOneWithoutProjectsInput;
  likes?: InputMaybe<UserCreateNestedManyWithoutLikedInput>;
  owner: UserCreateNestedOneWithoutProjectsInput;
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCreateWithoutDonationsInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutProjectsInput>;
  checkpoints?: InputMaybe<ProjectCheckPointCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kid: KidCreateNestedOneWithoutProjectsInput;
  likes?: InputMaybe<UserCreateNestedManyWithoutLikedInput>;
  owner: UserCreateNestedOneWithoutProjectsInput;
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCreateWithoutKidInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutProjectsInput>;
  checkpoints?: InputMaybe<ProjectCheckPointCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  likes?: InputMaybe<UserCreateNestedManyWithoutLikedInput>;
  owner: UserCreateNestedOneWithoutProjectsInput;
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCreateWithoutLikesInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutProjectsInput>;
  checkpoints?: InputMaybe<ProjectCheckPointCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kid: KidCreateNestedOneWithoutProjectsInput;
  owner: UserCreateNestedOneWithoutProjectsInput;
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCreateWithoutOwnerInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutProjectsInput>;
  checkpoints?: InputMaybe<ProjectCheckPointCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kid: KidCreateNestedOneWithoutProjectsInput;
  likes?: InputMaybe<UserCreateNestedManyWithoutLikedInput>;
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectCreateWithoutRewardsInput = {
  categories?: InputMaybe<CategoryCreateNestedManyWithoutProjectsInput>;
  checkpoints?: InputMaybe<ProjectCheckPointCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kid: KidCreateNestedOneWithoutProjectsInput;
  likes?: InputMaybe<UserCreateNestedManyWithoutLikedInput>;
  owner: UserCreateNestedOneWithoutProjectsInput;
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectListRelationFilter = {
  every?: InputMaybe<ProjectWhereInput>;
  none?: InputMaybe<ProjectWhereInput>;
  some?: InputMaybe<ProjectWhereInput>;
};

export type ProjectMaxAggregateOutputType = {
  __typename?: 'ProjectMaxAggregateOutputType';
  collectedAmount?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  kidId?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  promo_media?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  short_description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectMaxOrderByAggregateInput = {
  collectedAmount?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  goal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kidId?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  promo_media?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  short_description?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ProjectMinAggregateOutputType = {
  __typename?: 'ProjectMinAggregateOutputType';
  collectedAmount?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  goal?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  kidId?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
  promo_media?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  short_description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ProjectMinOrderByAggregateInput = {
  collectedAmount?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  goal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kidId?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  promo_media?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  short_description?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ProjectOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithAggregationInput = {
  _avg?: InputMaybe<ProjectAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProjectCountOrderByAggregateInput>;
  _max?: InputMaybe<ProjectMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProjectMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProjectSumOrderByAggregateInput>;
  collectedAmount?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  goal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kidId?: InputMaybe<SortOrder>;
  ownerId?: InputMaybe<SortOrder>;
  promo_media?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  short_description?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ProjectOrderByWithRelationInput = {
  categories?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  checkpoints?: InputMaybe<ProjectCheckPointOrderByRelationAggregateInput>;
  collectedAmount?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  donations?: InputMaybe<DonationOrderByRelationAggregateInput>;
  dueDate?: InputMaybe<SortOrder>;
  goal?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  kid?: InputMaybe<KidOrderByWithRelationInput>;
  kidId?: InputMaybe<SortOrder>;
  likes?: InputMaybe<UserOrderByRelationAggregateInput>;
  owner?: InputMaybe<UserOrderByWithRelationInput>;
  ownerId?: InputMaybe<SortOrder>;
  promo_media?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  rewards?: InputMaybe<RewardOrderByRelationAggregateInput>;
  short_description?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type ProjectRelationFilter = {
  is?: InputMaybe<ProjectWhereInput>;
  isNot?: InputMaybe<ProjectWhereInput>;
};

export enum ProjectScalarFieldEnum {
  CollectedAmount = 'collectedAmount',
  Content = 'content',
  CreatedAt = 'createdAt',
  DueDate = 'dueDate',
  Goal = 'goal',
  Id = 'id',
  KidId = 'kidId',
  OwnerId = 'ownerId',
  PromoMedia = 'promo_media',
  Published = 'published',
  ShortDescription = 'short_description',
  Title = 'title',
}

export type ProjectScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProjectScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ProjectScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectScalarWhereInput>>>;
  collectedAmount?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dueDate?: InputMaybe<DateTimeFilter>;
  goal?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  kidId?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringFilter>;
  promo_media?: InputMaybe<StringFilter>;
  published?: InputMaybe<BoolFilter>;
  short_description?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProjectScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<ProjectScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ProjectScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectScalarWhereWithAggregatesInput>>>;
  collectedAmount?: InputMaybe<IntWithAggregatesFilter>;
  content?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  dueDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  goal?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  kidId?: InputMaybe<StringWithAggregatesFilter>;
  ownerId?: InputMaybe<StringWithAggregatesFilter>;
  promo_media?: InputMaybe<StringWithAggregatesFilter>;
  published?: InputMaybe<BoolWithAggregatesFilter>;
  short_description?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProjectSumAggregateOutputType = {
  __typename?: 'ProjectSumAggregateOutputType';
  collectedAmount?: Maybe<Scalars['Int']>;
  goal?: Maybe<Scalars['Int']>;
};

export type ProjectSumOrderByAggregateInput = {
  collectedAmount?: InputMaybe<SortOrder>;
  goal?: InputMaybe<SortOrder>;
};

export type ProjectUncheckedCreateInput = {
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutProjectsInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationUncheckedCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kidId: Scalars['String'];
  likes?: InputMaybe<UserUncheckedCreateNestedManyWithoutLikedInput>;
  ownerId: Scalars['String'];
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardUncheckedCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectUncheckedCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutCategoriesInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutCategoriesInput>>>;
};

export type ProjectUncheckedCreateNestedManyWithoutKidInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutKidInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutKidInput>>>;
  createMany?: InputMaybe<ProjectCreateManyKidInputEnvelope>;
};

export type ProjectUncheckedCreateNestedManyWithoutLikesInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutLikesInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutLikesInput>>>;
};

export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutOwnerInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutOwnerInput>>>;
  createMany?: InputMaybe<ProjectCreateManyOwnerInputEnvelope>;
};

export type ProjectUncheckedCreateWithoutCategoriesInput = {
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationUncheckedCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kidId: Scalars['String'];
  likes?: InputMaybe<UserUncheckedCreateNestedManyWithoutLikedInput>;
  ownerId: Scalars['String'];
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardUncheckedCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectUncheckedCreateWithoutCheckpointsInput = {
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutProjectsInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationUncheckedCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kidId: Scalars['String'];
  likes?: InputMaybe<UserUncheckedCreateNestedManyWithoutLikedInput>;
  ownerId: Scalars['String'];
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardUncheckedCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectUncheckedCreateWithoutDonationsInput = {
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutProjectsInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kidId: Scalars['String'];
  likes?: InputMaybe<UserUncheckedCreateNestedManyWithoutLikedInput>;
  ownerId: Scalars['String'];
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardUncheckedCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectUncheckedCreateWithoutKidInput = {
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutProjectsInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationUncheckedCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  likes?: InputMaybe<UserUncheckedCreateNestedManyWithoutLikedInput>;
  ownerId: Scalars['String'];
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardUncheckedCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectUncheckedCreateWithoutLikesInput = {
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutProjectsInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationUncheckedCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kidId: Scalars['String'];
  ownerId: Scalars['String'];
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardUncheckedCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectUncheckedCreateWithoutOwnerInput = {
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutProjectsInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationUncheckedCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kidId: Scalars['String'];
  likes?: InputMaybe<UserUncheckedCreateNestedManyWithoutLikedInput>;
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  rewards?: InputMaybe<RewardUncheckedCreateNestedManyWithoutProjectInput>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectUncheckedCreateWithoutRewardsInput = {
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutProjectsInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedCreateNestedManyWithoutProjectInput>;
  collectedAmount?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  donations?: InputMaybe<DonationUncheckedCreateNestedManyWithoutProjectInput>;
  dueDate: Scalars['DateTime'];
  goal: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  kidId: Scalars['String'];
  likes?: InputMaybe<UserUncheckedCreateNestedManyWithoutLikedInput>;
  ownerId: Scalars['String'];
  promo_media: Scalars['String'];
  published?: InputMaybe<Scalars['Boolean']>;
  short_description: Scalars['String'];
  title: Scalars['String'];
};

export type ProjectUncheckedUpdateInput = {
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutProjectsNestedInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUncheckedUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kidId?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<UserUncheckedUpdateManyWithoutLikedNestedInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUncheckedUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateManyInput = {
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kidId?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutCategoriesInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutCategoriesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ProjectScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<ProjectUpdateWithWhereUniqueWithoutCategoriesInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<ProjectUpdateManyWithWhereWithoutCategoriesInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<ProjectUpsertWithWhereUniqueWithoutCategoriesInput>>
  >;
};

export type ProjectUncheckedUpdateManyWithoutKidNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutKidInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutKidInput>>>;
  createMany?: InputMaybe<ProjectCreateManyKidInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ProjectScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<ProjectUpdateWithWhereUniqueWithoutKidInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<ProjectUpdateManyWithWhereWithoutKidInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<ProjectUpsertWithWhereUniqueWithoutKidInput>>
  >;
};

export type ProjectUncheckedUpdateManyWithoutLikedInput = {
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kidId?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateManyWithoutLikesNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutLikesInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutLikesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ProjectScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<ProjectUpdateWithWhereUniqueWithoutLikesInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<ProjectUpdateManyWithWhereWithoutLikesInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<ProjectUpsertWithWhereUniqueWithoutLikesInput>>
  >;
};

export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutOwnerInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutOwnerInput>>>;
  createMany?: InputMaybe<ProjectCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ProjectScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<ProjectUpdateWithWhereUniqueWithoutOwnerInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<ProjectUpdateManyWithWhereWithoutOwnerInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<ProjectUpsertWithWhereUniqueWithoutOwnerInput>>
  >;
};

export type ProjectUncheckedUpdateManyWithoutProjectsInput = {
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kidId?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateWithoutCategoriesInput = {
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUncheckedUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kidId?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<UserUncheckedUpdateManyWithoutLikedNestedInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUncheckedUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateWithoutCheckpointsInput = {
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutProjectsNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUncheckedUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kidId?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<UserUncheckedUpdateManyWithoutLikedNestedInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUncheckedUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateWithoutDonationsInput = {
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutProjectsNestedInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kidId?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<UserUncheckedUpdateManyWithoutLikedNestedInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUncheckedUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateWithoutKidInput = {
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutProjectsNestedInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUncheckedUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<UserUncheckedUpdateManyWithoutLikedNestedInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUncheckedUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateWithoutLikesInput = {
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutProjectsNestedInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUncheckedUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kidId?: InputMaybe<StringFieldUpdateOperationsInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUncheckedUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateWithoutOwnerInput = {
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutProjectsNestedInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUncheckedUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kidId?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<UserUncheckedUpdateManyWithoutLikedNestedInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUncheckedUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUncheckedUpdateWithoutRewardsInput = {
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutProjectsNestedInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUncheckedUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUncheckedUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kidId?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<UserUncheckedUpdateManyWithoutLikedNestedInput>;
  ownerId?: InputMaybe<StringFieldUpdateOperationsInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpdateInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutProjectsNestedInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kid?: InputMaybe<KidUpdateOneRequiredWithoutProjectsNestedInput>;
  likes?: InputMaybe<UserUpdateManyWithoutLikedNestedInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutProjectsNestedInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyMutationInput = {
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpdateManyWithWhereWithoutCategoriesInput = {
  data: ProjectUncheckedUpdateManyWithoutProjectsInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithWhereWithoutKidInput = {
  data: ProjectUncheckedUpdateManyWithoutProjectsInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithWhereWithoutLikesInput = {
  data: ProjectUncheckedUpdateManyWithoutLikedInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
  data: ProjectUncheckedUpdateManyWithoutProjectsInput;
  where: ProjectScalarWhereInput;
};

export type ProjectUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutCategoriesInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutCategoriesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ProjectScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<ProjectUpdateWithWhereUniqueWithoutCategoriesInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<ProjectUpdateManyWithWhereWithoutCategoriesInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<ProjectUpsertWithWhereUniqueWithoutCategoriesInput>>
  >;
};

export type ProjectUpdateManyWithoutKidNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutKidInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutKidInput>>>;
  createMany?: InputMaybe<ProjectCreateManyKidInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ProjectScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<ProjectUpdateWithWhereUniqueWithoutKidInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<ProjectUpdateManyWithWhereWithoutKidInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<ProjectUpsertWithWhereUniqueWithoutKidInput>>
  >;
};

export type ProjectUpdateManyWithoutLikesNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutLikesInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutLikesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ProjectScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<ProjectUpdateWithWhereUniqueWithoutLikesInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<ProjectUpdateManyWithWhereWithoutLikesInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<ProjectUpsertWithWhereUniqueWithoutLikesInput>>
  >;
};

export type ProjectUpdateManyWithoutOwnerNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<ProjectCreateOrConnectWithoutOwnerInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<ProjectCreateWithoutOwnerInput>>>;
  createMany?: InputMaybe<ProjectCreateManyOwnerInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ProjectScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ProjectWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<ProjectUpdateWithWhereUniqueWithoutOwnerInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<ProjectUpdateManyWithWhereWithoutOwnerInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<ProjectUpsertWithWhereUniqueWithoutOwnerInput>>
  >;
};

export type ProjectUpdateOneRequiredWithoutCheckpointsNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutCheckpointsInput>;
  create?: InputMaybe<ProjectUncheckedCreateWithoutCheckpointsInput>;
  update?: InputMaybe<ProjectUncheckedUpdateWithoutCheckpointsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutCheckpointsInput>;
};

export type ProjectUpdateOneRequiredWithoutDonationsNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutDonationsInput>;
  create?: InputMaybe<ProjectUncheckedCreateWithoutDonationsInput>;
  update?: InputMaybe<ProjectUncheckedUpdateWithoutDonationsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutDonationsInput>;
};

export type ProjectUpdateOneRequiredWithoutRewardsNestedInput = {
  connect?: InputMaybe<ProjectWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProjectCreateOrConnectWithoutRewardsInput>;
  create?: InputMaybe<ProjectUncheckedCreateWithoutRewardsInput>;
  update?: InputMaybe<ProjectUncheckedUpdateWithoutRewardsInput>;
  upsert?: InputMaybe<ProjectUpsertWithoutRewardsInput>;
};

export type ProjectUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: ProjectUncheckedUpdateWithoutCategoriesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithWhereUniqueWithoutKidInput = {
  data: ProjectUncheckedUpdateWithoutKidInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithWhereUniqueWithoutLikesInput = {
  data: ProjectUncheckedUpdateWithoutLikesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
  data: ProjectUncheckedUpdateWithoutOwnerInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpdateWithoutCategoriesInput = {
  checkpoints?: InputMaybe<ProjectCheckPointUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kid?: InputMaybe<KidUpdateOneRequiredWithoutProjectsNestedInput>;
  likes?: InputMaybe<UserUpdateManyWithoutLikedNestedInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutProjectsNestedInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutCheckpointsInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutProjectsNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kid?: InputMaybe<KidUpdateOneRequiredWithoutProjectsNestedInput>;
  likes?: InputMaybe<UserUpdateManyWithoutLikedNestedInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutProjectsNestedInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutDonationsInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutProjectsNestedInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kid?: InputMaybe<KidUpdateOneRequiredWithoutProjectsNestedInput>;
  likes?: InputMaybe<UserUpdateManyWithoutLikedNestedInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutProjectsNestedInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutKidInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutProjectsNestedInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  likes?: InputMaybe<UserUpdateManyWithoutLikedNestedInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutProjectsNestedInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutLikesInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutProjectsNestedInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kid?: InputMaybe<KidUpdateOneRequiredWithoutProjectsNestedInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutProjectsNestedInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutOwnerInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutProjectsNestedInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kid?: InputMaybe<KidUpdateOneRequiredWithoutProjectsNestedInput>;
  likes?: InputMaybe<UserUpdateManyWithoutLikedNestedInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutProjectNestedInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpdateWithoutRewardsInput = {
  categories?: InputMaybe<CategoryUpdateManyWithoutProjectsNestedInput>;
  checkpoints?: InputMaybe<ProjectCheckPointUpdateManyWithoutProjectNestedInput>;
  collectedAmount?: InputMaybe<IntFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUpdateManyWithoutProjectNestedInput>;
  dueDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  goal?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  kid?: InputMaybe<KidUpdateOneRequiredWithoutProjectsNestedInput>;
  likes?: InputMaybe<UserUpdateManyWithoutLikedNestedInput>;
  owner?: InputMaybe<UserUpdateOneRequiredWithoutProjectsNestedInput>;
  promo_media?: InputMaybe<StringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  short_description?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: ProjectUncheckedCreateWithoutCategoriesInput;
  update: ProjectUncheckedUpdateWithoutCategoriesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithWhereUniqueWithoutKidInput = {
  create: ProjectUncheckedCreateWithoutKidInput;
  update: ProjectUncheckedUpdateWithoutKidInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithWhereUniqueWithoutLikesInput = {
  create: ProjectUncheckedCreateWithoutLikesInput;
  update: ProjectUncheckedUpdateWithoutLikesInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
  create: ProjectUncheckedCreateWithoutOwnerInput;
  update: ProjectUncheckedUpdateWithoutOwnerInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectUpsertWithoutCheckpointsInput = {
  create: ProjectUncheckedCreateWithoutCheckpointsInput;
  update: ProjectUncheckedUpdateWithoutCheckpointsInput;
};

export type ProjectUpsertWithoutDonationsInput = {
  create: ProjectUncheckedCreateWithoutDonationsInput;
  update: ProjectUncheckedUpdateWithoutDonationsInput;
};

export type ProjectUpsertWithoutRewardsInput = {
  create: ProjectUncheckedCreateWithoutRewardsInput;
  update: ProjectUncheckedUpdateWithoutRewardsInput;
};

export type ProjectWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProjectWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ProjectWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectWhereInput>>>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  checkpoints?: InputMaybe<ProjectCheckPointListRelationFilter>;
  collectedAmount?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  donations?: InputMaybe<DonationListRelationFilter>;
  dueDate?: InputMaybe<DateTimeFilter>;
  goal?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  kid?: InputMaybe<KidWhereInput>;
  kidId?: InputMaybe<StringFilter>;
  likes?: InputMaybe<UserListRelationFilter>;
  owner?: InputMaybe<UserWhereInput>;
  ownerId?: InputMaybe<StringFilter>;
  promo_media?: InputMaybe<StringFilter>;
  published?: InputMaybe<BoolFilter>;
  rewards?: InputMaybe<RewardListRelationFilter>;
  short_description?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCategory?: Maybe<AggregateCategory>;
  aggregateDonation?: Maybe<AggregateDonation>;
  aggregateKid?: Maybe<AggregateKid>;
  aggregateProject?: Maybe<AggregateProject>;
  aggregateProjectCheckPoint?: Maybe<AggregateProjectCheckPoint>;
  aggregateReward?: Maybe<AggregateReward>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstCategory?: Maybe<Category>;
  findFirstDonation?: Maybe<Donation>;
  findFirstKid?: Maybe<Kid>;
  findFirstProject?: Maybe<Project>;
  findFirstProjectCheckPoint?: Maybe<ProjectCheckPoint>;
  findFirstReward?: Maybe<Reward>;
  findFirstUser?: Maybe<User>;
  findManyCategory: Array<Category>;
  findManyCategoryCount: Scalars['Int'];
  findManyDonation: Array<Donation>;
  findManyDonationCount: Scalars['Int'];
  findManyKid: Array<Kid>;
  findManyKidCount: Scalars['Int'];
  findManyProject: Array<Project>;
  findManyProjectCheckPoint: Array<ProjectCheckPoint>;
  findManyProjectCheckPointCount: Scalars['Int'];
  findManyProjectCount: Scalars['Int'];
  findManyReward: Array<Reward>;
  findManyRewardCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueCategory?: Maybe<Category>;
  findUniqueDonation?: Maybe<Donation>;
  findUniqueKid?: Maybe<Kid>;
  findUniqueProject?: Maybe<Project>;
  findUniqueProjectCheckPoint?: Maybe<ProjectCheckPoint>;
  findUniqueReward?: Maybe<Reward>;
  findUniqueUser?: Maybe<User>;
  me: User;
  projectsFeed: Array<Project>;
  recentProjects: Array<Project>;
  trendingProjects: Array<Project>;
};

export type QueryAggregateCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type QueryAggregateDonationArgs = {
  cursor?: InputMaybe<DonationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<DonationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DonationWhereInput>;
};

export type QueryAggregateKidArgs = {
  cursor?: InputMaybe<KidWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<KidOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KidWhereInput>;
};

export type QueryAggregateProjectArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryAggregateProjectCheckPointArgs = {
  cursor?: InputMaybe<ProjectCheckPointWhereUniqueInput>;
  orderBy?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointOrderByWithRelationInput>>
  >;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectCheckPointWhereInput>;
};

export type QueryAggregateRewardArgs = {
  cursor?: InputMaybe<RewardWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<RewardOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RewardWhereInput>;
};

export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindFirstCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CategoryScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type QueryFindFirstDonationArgs = {
  cursor?: InputMaybe<DonationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DonationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DonationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DonationWhereInput>;
};

export type QueryFindFirstKidArgs = {
  cursor?: InputMaybe<KidWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<KidScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<KidOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KidWhereInput>;
};

export type QueryFindFirstProjectArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ProjectScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryFindFirstProjectCheckPointArgs = {
  cursor?: InputMaybe<ProjectCheckPointWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ProjectCheckPointScalarFieldEnum>>>;
  orderBy?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointOrderByWithRelationInput>>
  >;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectCheckPointWhereInput>;
};

export type QueryFindFirstRewardArgs = {
  cursor?: InputMaybe<RewardWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<RewardScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<RewardOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RewardWhereInput>;
};

export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindManyCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CategoryScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type QueryFindManyCategoryCountArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CategoryScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type QueryFindManyDonationArgs = {
  cursor?: InputMaybe<DonationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DonationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DonationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DonationWhereInput>;
};

export type QueryFindManyDonationCountArgs = {
  cursor?: InputMaybe<DonationWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DonationScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DonationOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DonationWhereInput>;
};

export type QueryFindManyKidArgs = {
  cursor?: InputMaybe<KidWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<KidScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<KidOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KidWhereInput>;
};

export type QueryFindManyKidCountArgs = {
  cursor?: InputMaybe<KidWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<KidScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<KidOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KidWhereInput>;
};

export type QueryFindManyProjectArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ProjectScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryFindManyProjectCheckPointArgs = {
  cursor?: InputMaybe<ProjectCheckPointWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ProjectCheckPointScalarFieldEnum>>>;
  orderBy?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointOrderByWithRelationInput>>
  >;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectCheckPointWhereInput>;
};

export type QueryFindManyProjectCheckPointCountArgs = {
  cursor?: InputMaybe<ProjectCheckPointWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ProjectCheckPointScalarFieldEnum>>>;
  orderBy?: InputMaybe<
    Array<InputMaybe<ProjectCheckPointOrderByWithRelationInput>>
  >;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectCheckPointWhereInput>;
};

export type QueryFindManyProjectCountArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ProjectScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type QueryFindManyRewardArgs = {
  cursor?: InputMaybe<RewardWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<RewardScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<RewardOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RewardWhereInput>;
};

export type QueryFindManyRewardCountArgs = {
  cursor?: InputMaybe<RewardWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<RewardScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<RewardOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RewardWhereInput>;
};

export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindManyUserCountArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindUniqueCategoryArgs = {
  where: CategoryWhereUniqueInput;
};

export type QueryFindUniqueDonationArgs = {
  where: DonationWhereUniqueInput;
};

export type QueryFindUniqueKidArgs = {
  where: KidWhereUniqueInput;
};

export type QueryFindUniqueProjectArgs = {
  where: ProjectWhereUniqueInput;
};

export type QueryFindUniqueProjectCheckPointArgs = {
  where: ProjectCheckPointWhereUniqueInput;
};

export type QueryFindUniqueRewardArgs = {
  where: RewardWhereUniqueInput;
};

export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Reward = {
  __typename?: 'Reward';
  _count: RewardCountOutputType;
  deliveryFrom?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  donations: Array<Donation>;
  id: Scalars['String'];
  price: Scalars['Int'];
  project: Project;
  projectId: Scalars['String'];
  title: Scalars['String'];
};

export type RewardDonationsArgs = {
  cursor?: InputMaybe<DonationWhereUniqueInput>;
  distinct?: InputMaybe<DonationScalarFieldEnum>;
  orderBy?: InputMaybe<DonationOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DonationWhereInput>;
};

export type RewardAvgAggregateOutputType = {
  __typename?: 'RewardAvgAggregateOutputType';
  price?: Maybe<Scalars['Float']>;
};

export type RewardAvgOrderByAggregateInput = {
  price?: InputMaybe<SortOrder>;
};

export type RewardCountAggregateOutputType = {
  __typename?: 'RewardCountAggregateOutputType';
  _all: Scalars['Int'];
  deliveryFrom: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  price: Scalars['Int'];
  projectId: Scalars['Int'];
  title: Scalars['Int'];
};

export type RewardCountOrderByAggregateInput = {
  deliveryFrom?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type RewardCountOutputType = {
  __typename?: 'RewardCountOutputType';
  donations: Scalars['Int'];
};

export type RewardCreateInput = {
  deliveryFrom?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  donations?: InputMaybe<DonationCreateNestedManyWithoutRewardInput>;
  id?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  project: ProjectCreateNestedOneWithoutRewardsInput;
  title: Scalars['String'];
};

export type RewardCreateManyInput = {
  deliveryFrom?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  projectId: Scalars['String'];
  title: Scalars['String'];
};

export type RewardCreateManyProjectInput = {
  deliveryFrom?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  title: Scalars['String'];
};

export type RewardCreateManyProjectInputEnvelope = {
  data: RewardCreateManyProjectInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type RewardCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<InputMaybe<RewardWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<RewardCreateOrConnectWithoutProjectInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<RewardCreateWithoutProjectInput>>>;
  createMany?: InputMaybe<RewardCreateManyProjectInputEnvelope>;
};

export type RewardCreateNestedOneWithoutDonationsInput = {
  connect?: InputMaybe<RewardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RewardCreateOrConnectWithoutDonationsInput>;
  create?: InputMaybe<RewardUncheckedCreateWithoutDonationsInput>;
};

export type RewardCreateOrConnectWithoutDonationsInput = {
  create: RewardUncheckedCreateWithoutDonationsInput;
  where: RewardWhereUniqueInput;
};

export type RewardCreateOrConnectWithoutProjectInput = {
  create: RewardUncheckedCreateWithoutProjectInput;
  where: RewardWhereUniqueInput;
};

export type RewardCreateWithoutDonationsInput = {
  deliveryFrom?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  project: ProjectCreateNestedOneWithoutRewardsInput;
  title: Scalars['String'];
};

export type RewardCreateWithoutProjectInput = {
  deliveryFrom?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  donations?: InputMaybe<DonationCreateNestedManyWithoutRewardInput>;
  id?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  title: Scalars['String'];
};

export type RewardListRelationFilter = {
  every?: InputMaybe<RewardWhereInput>;
  none?: InputMaybe<RewardWhereInput>;
  some?: InputMaybe<RewardWhereInput>;
};

export type RewardMaxAggregateOutputType = {
  __typename?: 'RewardMaxAggregateOutputType';
  deliveryFrom?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type RewardMaxOrderByAggregateInput = {
  deliveryFrom?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type RewardMinAggregateOutputType = {
  __typename?: 'RewardMinAggregateOutputType';
  deliveryFrom?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type RewardMinOrderByAggregateInput = {
  deliveryFrom?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type RewardOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RewardOrderByWithAggregationInput = {
  _avg?: InputMaybe<RewardAvgOrderByAggregateInput>;
  _count?: InputMaybe<RewardCountOrderByAggregateInput>;
  _max?: InputMaybe<RewardMaxOrderByAggregateInput>;
  _min?: InputMaybe<RewardMinOrderByAggregateInput>;
  _sum?: InputMaybe<RewardSumOrderByAggregateInput>;
  deliveryFrom?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  projectId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type RewardOrderByWithRelationInput = {
  deliveryFrom?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  donations?: InputMaybe<DonationOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  project?: InputMaybe<ProjectOrderByWithRelationInput>;
  projectId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type RewardRelationFilter = {
  is?: InputMaybe<RewardWhereInput>;
  isNot?: InputMaybe<RewardWhereInput>;
};

export enum RewardScalarFieldEnum {
  DeliveryFrom = 'deliveryFrom',
  Description = 'description',
  Id = 'id',
  Price = 'price',
  ProjectId = 'projectId',
  Title = 'title',
}

export type RewardScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<RewardScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<RewardScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RewardScalarWhereInput>>>;
  deliveryFrom?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  projectId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type RewardScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<RewardScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<RewardScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RewardScalarWhereWithAggregatesInput>>>;
  deliveryFrom?: InputMaybe<StringNullableWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  price?: InputMaybe<IntWithAggregatesFilter>;
  projectId?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type RewardSumAggregateOutputType = {
  __typename?: 'RewardSumAggregateOutputType';
  price?: Maybe<Scalars['Int']>;
};

export type RewardSumOrderByAggregateInput = {
  price?: InputMaybe<SortOrder>;
};

export type RewardUncheckedCreateInput = {
  deliveryFrom?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  donations?: InputMaybe<DonationUncheckedCreateNestedManyWithoutRewardInput>;
  id?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  projectId: Scalars['String'];
  title: Scalars['String'];
};

export type RewardUncheckedCreateNestedManyWithoutProjectInput = {
  connect?: InputMaybe<Array<InputMaybe<RewardWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<RewardCreateOrConnectWithoutProjectInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<RewardCreateWithoutProjectInput>>>;
  createMany?: InputMaybe<RewardCreateManyProjectInputEnvelope>;
};

export type RewardUncheckedCreateWithoutDonationsInput = {
  deliveryFrom?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  projectId: Scalars['String'];
  title: Scalars['String'];
};

export type RewardUncheckedCreateWithoutProjectInput = {
  deliveryFrom?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  donations?: InputMaybe<DonationUncheckedCreateNestedManyWithoutRewardInput>;
  id?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  title: Scalars['String'];
};

export type RewardUncheckedUpdateInput = {
  deliveryFrom?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUncheckedUpdateManyWithoutRewardNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  projectId?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RewardUncheckedUpdateManyInput = {
  deliveryFrom?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  projectId?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RewardUncheckedUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<RewardWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<RewardCreateOrConnectWithoutProjectInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<RewardCreateWithoutProjectInput>>>;
  createMany?: InputMaybe<RewardCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<RewardWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<RewardScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<RewardWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<RewardWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<RewardUpdateWithWhereUniqueWithoutProjectInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<RewardUpdateManyWithWhereWithoutProjectInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<RewardUpsertWithWhereUniqueWithoutProjectInput>>
  >;
};

export type RewardUncheckedUpdateManyWithoutRewardsInput = {
  deliveryFrom?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RewardUncheckedUpdateWithoutDonationsInput = {
  deliveryFrom?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  projectId?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RewardUncheckedUpdateWithoutProjectInput = {
  deliveryFrom?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUncheckedUpdateManyWithoutRewardNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RewardUpdateInput = {
  deliveryFrom?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUpdateManyWithoutRewardNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutRewardsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RewardUpdateManyMutationInput = {
  deliveryFrom?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RewardUpdateManyWithWhereWithoutProjectInput = {
  data: RewardUncheckedUpdateManyWithoutRewardsInput;
  where: RewardScalarWhereInput;
};

export type RewardUpdateManyWithoutProjectNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<RewardWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<RewardCreateOrConnectWithoutProjectInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<RewardCreateWithoutProjectInput>>>;
  createMany?: InputMaybe<RewardCreateManyProjectInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<RewardWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<RewardScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<RewardWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<RewardWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<RewardUpdateWithWhereUniqueWithoutProjectInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<RewardUpdateManyWithWhereWithoutProjectInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<RewardUpsertWithWhereUniqueWithoutProjectInput>>
  >;
};

export type RewardUpdateOneWithoutDonationsNestedInput = {
  connect?: InputMaybe<RewardWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RewardCreateOrConnectWithoutDonationsInput>;
  create?: InputMaybe<RewardUncheckedCreateWithoutDonationsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<RewardUncheckedUpdateWithoutDonationsInput>;
  upsert?: InputMaybe<RewardUpsertWithoutDonationsInput>;
};

export type RewardUpdateWithWhereUniqueWithoutProjectInput = {
  data: RewardUncheckedUpdateWithoutProjectInput;
  where: RewardWhereUniqueInput;
};

export type RewardUpdateWithoutDonationsInput = {
  deliveryFrom?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  project?: InputMaybe<ProjectUpdateOneRequiredWithoutRewardsNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RewardUpdateWithoutProjectInput = {
  deliveryFrom?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  donations?: InputMaybe<DonationUpdateManyWithoutRewardNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  price?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RewardUpsertWithWhereUniqueWithoutProjectInput = {
  create: RewardUncheckedCreateWithoutProjectInput;
  update: RewardUncheckedUpdateWithoutProjectInput;
  where: RewardWhereUniqueInput;
};

export type RewardUpsertWithoutDonationsInput = {
  create: RewardUncheckedCreateWithoutDonationsInput;
  update: RewardUncheckedUpdateWithoutDonationsInput;
};

export type RewardWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<RewardWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<RewardWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RewardWhereInput>>>;
  deliveryFrom?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringFilter>;
  donations?: InputMaybe<DonationListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  price?: InputMaybe<IntFilter>;
  project?: InputMaybe<ProjectWhereInput>;
  projectId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type RewardWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  has?: InputMaybe<Scalars['String']>;
  hasEvery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  hasSome?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  token?: Maybe<Scalars['String']>;
};

export enum TransactionIsolationLevel {
  ReadCommitted = 'ReadCommitted',
  ReadUncommitted = 'ReadUncommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}

export type User = {
  __typename?: 'User';
  _count: UserCountOutputType;
  donations: Array<Donation>;
  email: Scalars['String'];
  id: Scalars['String'];
  liked: Array<Project>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  projects: Array<Project>;
};

export type UserDonationsArgs = {
  cursor?: InputMaybe<DonationWhereUniqueInput>;
  distinct?: InputMaybe<DonationScalarFieldEnum>;
  orderBy?: InputMaybe<DonationOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DonationWhereInput>;
};

export type UserLikedArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<ProjectScalarFieldEnum>;
  orderBy?: InputMaybe<ProjectOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type UserProjectsArgs = {
  cursor?: InputMaybe<ProjectWhereUniqueInput>;
  distinct?: InputMaybe<ProjectScalarFieldEnum>;
  orderBy?: InputMaybe<ProjectOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProjectWhereInput>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UserCountOutputType = {
  __typename?: 'UserCountOutputType';
  donations: Scalars['Int'];
  liked: Scalars['Int'];
  projects: Scalars['Int'];
};

export type UserCreateInput = {
  donations?: InputMaybe<DonationCreateNestedManyWithoutSenderInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  liked?: InputMaybe<ProjectCreateNestedManyWithoutLikesInput>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  projects?: InputMaybe<ProjectCreateNestedManyWithoutOwnerInput>;
};

export type UserCreateManyInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserCreateNestedManyWithoutLikedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<UserCreateOrConnectWithoutLikedInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutLikedInput>>>;
};

export type UserCreateNestedOneWithoutDonationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutDonationsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutDonationsInput>;
};

export type UserCreateNestedOneWithoutProjectsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutProjectsInput>;
};

export type UserCreateOrConnectWithoutDonationsInput = {
  create: UserUncheckedCreateWithoutDonationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLikedInput = {
  create: UserUncheckedCreateWithoutLikedInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProjectsInput = {
  create: UserUncheckedCreateWithoutProjectsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutDonationsInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  liked?: InputMaybe<ProjectCreateNestedManyWithoutLikesInput>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  projects?: InputMaybe<ProjectCreateNestedManyWithoutOwnerInput>;
};

export type UserCreateWithoutLikedInput = {
  donations?: InputMaybe<DonationCreateNestedManyWithoutSenderInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  projects?: InputMaybe<ProjectCreateNestedManyWithoutOwnerInput>;
};

export type UserCreateWithoutProjectsInput = {
  donations?: InputMaybe<DonationCreateNestedManyWithoutSenderInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  liked?: InputMaybe<ProjectCreateNestedManyWithoutLikesInput>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  donations?: InputMaybe<DonationOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  liked?: InputMaybe<ProjectOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  projects?: InputMaybe<ProjectOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUncheckedCreateInput = {
  donations?: InputMaybe<DonationUncheckedCreateNestedManyWithoutSenderInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  liked?: InputMaybe<ProjectUncheckedCreateNestedManyWithoutLikesInput>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  projects?: InputMaybe<ProjectUncheckedCreateNestedManyWithoutOwnerInput>;
};

export type UserUncheckedCreateNestedManyWithoutLikedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<UserCreateOrConnectWithoutLikedInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutLikedInput>>>;
};

export type UserUncheckedCreateWithoutDonationsInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  liked?: InputMaybe<ProjectUncheckedCreateNestedManyWithoutLikesInput>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  projects?: InputMaybe<ProjectUncheckedCreateNestedManyWithoutOwnerInput>;
};

export type UserUncheckedCreateWithoutLikedInput = {
  donations?: InputMaybe<DonationUncheckedCreateNestedManyWithoutSenderInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  projects?: InputMaybe<ProjectUncheckedCreateNestedManyWithoutOwnerInput>;
};

export type UserUncheckedCreateWithoutProjectsInput = {
  donations?: InputMaybe<DonationUncheckedCreateNestedManyWithoutSenderInput>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  liked?: InputMaybe<ProjectUncheckedCreateNestedManyWithoutLikesInput>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserUncheckedUpdateInput = {
  donations?: InputMaybe<DonationUncheckedUpdateManyWithoutSenderNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  liked?: InputMaybe<ProjectUncheckedUpdateManyWithoutLikesNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUncheckedUpdateManyWithoutOwnerNestedInput>;
};

export type UserUncheckedUpdateManyInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyWithoutLikedNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<UserCreateOrConnectWithoutLikedInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutLikedInput>>>;
  delete?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<UserUpdateWithWhereUniqueWithoutLikedInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<UserUpdateManyWithWhereWithoutLikedInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<UserUpsertWithWhereUniqueWithoutLikedInput>>
  >;
};

export type UserUncheckedUpdateManyWithoutLikesInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutDonationsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  liked?: InputMaybe<ProjectUncheckedUpdateManyWithoutLikesNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUncheckedUpdateManyWithoutOwnerNestedInput>;
};

export type UserUncheckedUpdateWithoutLikedInput = {
  donations?: InputMaybe<DonationUncheckedUpdateManyWithoutSenderNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUncheckedUpdateManyWithoutOwnerNestedInput>;
};

export type UserUncheckedUpdateWithoutProjectsInput = {
  donations?: InputMaybe<DonationUncheckedUpdateManyWithoutSenderNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  liked?: InputMaybe<ProjectUncheckedUpdateManyWithoutLikesNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  donations?: InputMaybe<DonationUpdateManyWithoutSenderNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  liked?: InputMaybe<ProjectUpdateManyWithoutLikesNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutOwnerNestedInput>;
};

export type UserUpdateManyMutationInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutLikedInput = {
  data: UserUncheckedUpdateManyWithoutLikesInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutLikedNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<
    Array<InputMaybe<UserCreateOrConnectWithoutLikedInput>>
  >;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutLikedInput>>>;
  delete?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  update?: InputMaybe<
    Array<InputMaybe<UserUpdateWithWhereUniqueWithoutLikedInput>>
  >;
  updateMany?: InputMaybe<
    Array<InputMaybe<UserUpdateManyWithWhereWithoutLikedInput>>
  >;
  upsert?: InputMaybe<
    Array<InputMaybe<UserUpsertWithWhereUniqueWithoutLikedInput>>
  >;
};

export type UserUpdateOneRequiredWithoutDonationsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutDonationsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutDonationsInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutDonationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutDonationsInput>;
};

export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProjectsInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutProjectsInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutProjectsInput>;
  upsert?: InputMaybe<UserUpsertWithoutProjectsInput>;
};

export type UserUpdateWithWhereUniqueWithoutLikedInput = {
  data: UserUncheckedUpdateWithoutLikedInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutDonationsInput = {
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  liked?: InputMaybe<ProjectUpdateManyWithoutLikesNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutOwnerNestedInput>;
};

export type UserUpdateWithoutLikedInput = {
  donations?: InputMaybe<DonationUpdateManyWithoutSenderNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  projects?: InputMaybe<ProjectUpdateManyWithoutOwnerNestedInput>;
};

export type UserUpdateWithoutProjectsInput = {
  donations?: InputMaybe<DonationUpdateManyWithoutSenderNestedInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  liked?: InputMaybe<ProjectUpdateManyWithoutLikesNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutLikedInput = {
  create: UserUncheckedCreateWithoutLikedInput;
  update: UserUncheckedUpdateWithoutLikedInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutDonationsInput = {
  create: UserUncheckedCreateWithoutDonationsInput;
  update: UserUncheckedUpdateWithoutDonationsInput;
};

export type UserUpsertWithoutProjectsInput = {
  create: UserUncheckedCreateWithoutProjectsInput;
  update: UserUncheckedUpdateWithoutProjectsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  donations?: InputMaybe<DonationListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  liked?: InputMaybe<ProjectListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  projects?: InputMaybe<ProjectListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  data?: InputMaybe<SignInInput>;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login?: { __typename?: 'Token'; token?: string | null } | null;
};

export type ShowUsersQueryVariables = Exact<{ [key: string]: never }>;

export type ShowUsersQuery = {
  __typename?: 'Query';
  findManyUser: Array<{
    __typename?: 'User';
    name?: string | null;
    email: string;
  }>;
};

export type SignupMutationVariables = Exact<{
  data: SignUpInput;
}>;

export type SignupMutation = {
  __typename?: 'Mutation';
  signup: { __typename?: 'Token'; token?: string | null };
};

export const LoginDocument = gql`
  mutation login($data: SignInInput) {
    login(data: $data) {
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const ShowUsersDocument = gql`
  query showUsers {
    findManyUser {
      name
      email
    }
  }
`;

/**
 * __useShowUsersQuery__
 *
 * To run a query within a React component, call `useShowUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useShowUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShowUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useShowUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ShowUsersQuery,
    ShowUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ShowUsersQuery, ShowUsersQueryVariables>(
    ShowUsersDocument,
    options,
  );
}
export function useShowUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShowUsersQuery,
    ShowUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ShowUsersQuery, ShowUsersQueryVariables>(
    ShowUsersDocument,
    options,
  );
}
export type ShowUsersQueryHookResult = ReturnType<typeof useShowUsersQuery>;
export type ShowUsersLazyQueryHookResult = ReturnType<
  typeof useShowUsersLazyQuery
>;
export type ShowUsersQueryResult = Apollo.QueryResult<
  ShowUsersQuery,
  ShowUsersQueryVariables
>;
export const SignupDocument = gql`
  mutation signup($data: SignUpInput!) {
    signup(data: $data) {
      token
    }
  }
`;
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    options,
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;

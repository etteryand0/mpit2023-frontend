import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type AggregateChat = {
  __typename?: 'AggregateChat';
  _count?: Maybe<ChatCountAggregateOutputType>;
  _max?: Maybe<ChatMaxAggregateOutputType>;
  _min?: Maybe<ChatMinAggregateOutputType>;
};

export type AggregateEvent = {
  __typename?: 'AggregateEvent';
  _count?: Maybe<EventCountAggregateOutputType>;
  _max?: Maybe<EventMaxAggregateOutputType>;
  _min?: Maybe<EventMinAggregateOutputType>;
};

export type AggregateMessage = {
  __typename?: 'AggregateMessage';
  _count?: Maybe<MessageCountAggregateOutputType>;
  _max?: Maybe<MessageMaxAggregateOutputType>;
  _min?: Maybe<MessageMinAggregateOutputType>;
};

export type AggregateProfile = {
  __typename?: 'AggregateProfile';
  _count?: Maybe<ProfileCountAggregateOutputType>;
  _max?: Maybe<ProfileMaxAggregateOutputType>;
  _min?: Maybe<ProfileMinAggregateOutputType>;
};

export type AggregateRoom = {
  __typename?: 'AggregateRoom';
  _count?: Maybe<RoomCountAggregateOutputType>;
  _max?: Maybe<RoomMaxAggregateOutputType>;
  _min?: Maybe<RoomMinAggregateOutputType>;
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
  events: Array<Event>;
  id: Scalars['Int'];
  title: Scalars['String'];
};


export type CategoryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<EventScalarFieldEnum>;
  orderBy?: InputMaybe<EventOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
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
  events: Scalars['Int'];
};

export type CategoryCreateInput = {
  events?: InputMaybe<EventCreateNestedManyWithoutCategoriesInput>;
  title: Scalars['String'];
};

export type CategoryCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type CategoryCreateNestedManyWithoutEventsInput = {
  connect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CategoryCreateOrConnectWithoutEventsInput>>>;
  create?: InputMaybe<Array<InputMaybe<CategoryCreateWithoutEventsInput>>>;
};

export type CategoryCreateOrConnectWithoutEventsInput = {
  create: CategoryUncheckedCreateWithoutEventsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutEventsInput = {
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
  events?: InputMaybe<EventOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export enum CategoryScalarFieldEnum {
  Id = 'id',
  Title = 'title'
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
  events?: InputMaybe<EventUncheckedCreateNestedManyWithoutCategoriesInput>;
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type CategoryUncheckedCreateNestedManyWithoutEventsInput = {
  connect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CategoryCreateOrConnectWithoutEventsInput>>>;
  create?: InputMaybe<Array<InputMaybe<CategoryCreateWithoutEventsInput>>>;
};

export type CategoryUncheckedCreateWithoutEventsInput = {
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type CategoryUncheckedUpdateInput = {
  events?: InputMaybe<EventUncheckedUpdateManyWithoutCategoriesNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
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

export type CategoryUncheckedUpdateManyWithoutEventsNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CategoryCreateOrConnectWithoutEventsInput>>>;
  create?: InputMaybe<Array<InputMaybe<CategoryCreateWithoutEventsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CategoryScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CategoryUpdateWithWhereUniqueWithoutEventsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CategoryUpdateManyWithWhereWithoutEventsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CategoryUpsertWithWhereUniqueWithoutEventsInput>>>;
};

export type CategoryUncheckedUpdateWithoutEventsInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateInput = {
  events?: InputMaybe<EventUpdateManyWithoutCategoriesNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutEventsInput = {
  data: CategoryUncheckedUpdateManyWithoutCategoriesInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutEventsNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CategoryCreateOrConnectWithoutEventsInput>>>;
  create?: InputMaybe<Array<InputMaybe<CategoryCreateWithoutEventsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CategoryScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CategoryWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CategoryUpdateWithWhereUniqueWithoutEventsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CategoryUpdateManyWithWhereWithoutEventsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CategoryUpsertWithWhereUniqueWithoutEventsInput>>>;
};

export type CategoryUpdateWithWhereUniqueWithoutEventsInput = {
  data: CategoryUncheckedUpdateWithoutEventsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutEventsInput = {
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutEventsInput = {
  create: CategoryUncheckedCreateWithoutEventsInput;
  update: CategoryUncheckedUpdateWithoutEventsInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CategoryWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CategoryWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CategoryWhereInput>>>;
  events?: InputMaybe<EventListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Chat = {
  __typename?: 'Chat';
  _count: ChatCountOutputType;
  createdAt: Scalars['DateTime'];
  event: Event;
  eventId: Scalars['String'];
  id: Scalars['String'];
  members: Array<User>;
  messages: Array<Message>;
};


export type ChatMembersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<UserScalarFieldEnum>;
  orderBy?: InputMaybe<UserOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type ChatMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<MessageScalarFieldEnum>;
  orderBy?: InputMaybe<MessageOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};

export type ChatCountAggregateOutputType = {
  __typename?: 'ChatCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  eventId: Scalars['Int'];
  id: Scalars['Int'];
};

export type ChatCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ChatCountOutputType = {
  __typename?: 'ChatCountOutputType';
  members: Scalars['Int'];
  messages: Scalars['Int'];
};

export type ChatCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutChatInput;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutChatsInput>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutChatInput>;
};

export type ChatCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
};

export type ChatCreateNestedManyWithoutMembersInput = {
  connect?: InputMaybe<Array<InputMaybe<ChatWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ChatCreateOrConnectWithoutMembersInput>>>;
  create?: InputMaybe<Array<InputMaybe<ChatCreateWithoutMembersInput>>>;
};

export type ChatCreateNestedOneWithoutEventInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutEventInput>;
  create?: InputMaybe<ChatUncheckedCreateWithoutEventInput>;
};

export type ChatCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ChatUncheckedCreateWithoutMessagesInput>;
};

export type ChatCreateOrConnectWithoutEventInput = {
  create: ChatUncheckedCreateWithoutEventInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateOrConnectWithoutMembersInput = {
  create: ChatUncheckedCreateWithoutMembersInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateOrConnectWithoutMessagesInput = {
  create: ChatUncheckedCreateWithoutMessagesInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateWithoutEventInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutChatsInput>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutChatInput>;
};

export type ChatCreateWithoutMembersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutChatInput;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutChatInput>;
};

export type ChatCreateWithoutMessagesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event: EventCreateNestedOneWithoutChatInput;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserCreateNestedManyWithoutChatsInput>;
};

export type ChatListRelationFilter = {
  every?: InputMaybe<ChatWhereInput>;
  none?: InputMaybe<ChatWhereInput>;
  some?: InputMaybe<ChatWhereInput>;
};

export type ChatMaxAggregateOutputType = {
  __typename?: 'ChatMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ChatMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ChatMinAggregateOutputType = {
  __typename?: 'ChatMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  eventId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ChatMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ChatOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ChatOrderByWithAggregationInput = {
  _count?: InputMaybe<ChatCountOrderByAggregateInput>;
  _max?: InputMaybe<ChatMaxOrderByAggregateInput>;
  _min?: InputMaybe<ChatMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ChatOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  event?: InputMaybe<EventOrderByWithRelationInput>;
  eventId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  members?: InputMaybe<UserOrderByRelationAggregateInput>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
};

export type ChatRelationFilter = {
  is?: InputMaybe<ChatWhereInput>;
  isNot?: InputMaybe<ChatWhereInput>;
};

export enum ChatScalarFieldEnum {
  CreatedAt = 'createdAt',
  EventId = 'eventId',
  Id = 'id'
}

export type ChatScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ChatScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ChatScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ChatScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
};

export type ChatScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<ChatScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ChatScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ChatScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  eventId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
};

export type ChatUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserUncheckedCreateNestedManyWithoutChatsInput>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutChatInput>;
};

export type ChatUncheckedCreateNestedManyWithoutMembersInput = {
  connect?: InputMaybe<Array<InputMaybe<ChatWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ChatCreateOrConnectWithoutMembersInput>>>;
  create?: InputMaybe<Array<InputMaybe<ChatCreateWithoutMembersInput>>>;
};

export type ChatUncheckedCreateNestedOneWithoutEventInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutEventInput>;
  create?: InputMaybe<ChatUncheckedCreateWithoutEventInput>;
};

export type ChatUncheckedCreateWithoutEventInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserUncheckedCreateNestedManyWithoutChatsInput>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutChatInput>;
};

export type ChatUncheckedCreateWithoutMembersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutChatInput>;
};

export type ChatUncheckedCreateWithoutMessagesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<UserUncheckedCreateNestedManyWithoutChatsInput>;
};

export type ChatUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUncheckedUpdateManyWithoutChatsNestedInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutChatNestedInput>;
};

export type ChatUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ChatUncheckedUpdateManyWithoutChatsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ChatUncheckedUpdateManyWithoutMembersNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ChatWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ChatCreateOrConnectWithoutMembersInput>>>;
  create?: InputMaybe<Array<InputMaybe<ChatCreateWithoutMembersInput>>>;
  delete?: InputMaybe<Array<InputMaybe<ChatWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ChatScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ChatWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ChatWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ChatUpdateWithWhereUniqueWithoutMembersInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ChatUpdateManyWithWhereWithoutMembersInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ChatUpsertWithWhereUniqueWithoutMembersInput>>>;
};

export type ChatUncheckedUpdateOneWithoutEventNestedInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutEventInput>;
  create?: InputMaybe<ChatUncheckedCreateWithoutEventInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ChatUncheckedUpdateWithoutEventInput>;
  upsert?: InputMaybe<ChatUpsertWithoutEventInput>;
};

export type ChatUncheckedUpdateWithoutEventInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUncheckedUpdateManyWithoutChatsNestedInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutChatNestedInput>;
};

export type ChatUncheckedUpdateWithoutMembersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutChatNestedInput>;
};

export type ChatUncheckedUpdateWithoutMessagesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUncheckedUpdateManyWithoutChatsNestedInput>;
};

export type ChatUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutChatNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutChatsNestedInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutChatNestedInput>;
};

export type ChatUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ChatUpdateManyWithWhereWithoutMembersInput = {
  data: ChatUncheckedUpdateManyWithoutChatsInput;
  where: ChatScalarWhereInput;
};

export type ChatUpdateManyWithoutMembersNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<ChatWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<ChatCreateOrConnectWithoutMembersInput>>>;
  create?: InputMaybe<Array<InputMaybe<ChatCreateWithoutMembersInput>>>;
  delete?: InputMaybe<Array<InputMaybe<ChatWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<ChatScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<ChatWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<ChatWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<ChatUpdateWithWhereUniqueWithoutMembersInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<ChatUpdateManyWithWhereWithoutMembersInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<ChatUpsertWithWhereUniqueWithoutMembersInput>>>;
};

export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ChatUncheckedCreateWithoutMessagesInput>;
  update?: InputMaybe<ChatUncheckedUpdateWithoutMessagesInput>;
  upsert?: InputMaybe<ChatUpsertWithoutMessagesInput>;
};

export type ChatUpdateOneWithoutEventNestedInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutEventInput>;
  create?: InputMaybe<ChatUncheckedCreateWithoutEventInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ChatUncheckedUpdateWithoutEventInput>;
  upsert?: InputMaybe<ChatUpsertWithoutEventInput>;
};

export type ChatUpdateWithWhereUniqueWithoutMembersInput = {
  data: ChatUncheckedUpdateWithoutMembersInput;
  where: ChatWhereUniqueInput;
};

export type ChatUpdateWithoutEventInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutChatsNestedInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutChatNestedInput>;
};

export type ChatUpdateWithoutMembersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutChatNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutChatNestedInput>;
};

export type ChatUpdateWithoutMessagesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  event?: InputMaybe<EventUpdateOneRequiredWithoutChatNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  members?: InputMaybe<UserUpdateManyWithoutChatsNestedInput>;
};

export type ChatUpsertWithWhereUniqueWithoutMembersInput = {
  create: ChatUncheckedCreateWithoutMembersInput;
  update: ChatUncheckedUpdateWithoutMembersInput;
  where: ChatWhereUniqueInput;
};

export type ChatUpsertWithoutEventInput = {
  create: ChatUncheckedCreateWithoutEventInput;
  update: ChatUncheckedUpdateWithoutEventInput;
};

export type ChatUpsertWithoutMessagesInput = {
  create: ChatUncheckedCreateWithoutMessagesInput;
  update: ChatUncheckedUpdateWithoutMessagesInput;
};

export type ChatWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ChatWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ChatWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ChatWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventWhereInput>;
  eventId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  members?: InputMaybe<UserListRelationFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
};

export type ChatWhereUniqueInput = {
  eventId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
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

export type EnumUserRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<UserRole>;
};

export type EnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<InputMaybe<UserRole>>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserRole>>>;
};

export type EnumUserRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleFilter>;
  _min?: InputMaybe<NestedEnumUserRoleFilter>;
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<InputMaybe<UserRole>>>;
  not?: InputMaybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserRole>>>;
};

export type Event = {
  __typename?: 'Event';
  _count: EventCountOutputType;
  approved: Scalars['Boolean'];
  categories: Array<Category>;
  chat?: Maybe<Chat>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  issuedBy?: Maybe<User>;
  participants: Array<User>;
  responsibles: Array<User>;
  room: Room;
  roomId: Scalars['String'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};


export type EventCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<CategoryScalarFieldEnum>;
  orderBy?: InputMaybe<CategoryOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type EventParticipantsArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<UserScalarFieldEnum>;
  orderBy?: InputMaybe<UserOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type EventResponsiblesArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<UserScalarFieldEnum>;
  orderBy?: InputMaybe<UserOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type EventCountAggregateOutputType = {
  __typename?: 'EventCountAggregateOutputType';
  _all: Scalars['Int'];
  approved: Scalars['Int'];
  date: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  roomId: Scalars['Int'];
  shortDescription: Scalars['Int'];
  title: Scalars['Int'];
  userId: Scalars['Int'];
};

export type EventCountOrderByAggregateInput = {
  approved?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  roomId?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EventCountOutputType = {
  __typename?: 'EventCountOutputType';
  categories: Scalars['Int'];
  participants: Scalars['Int'];
  responsibles: Scalars['Int'];
};

export type EventCreateInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutEventsInput>;
  chat?: InputMaybe<ChatCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  issuedBy?: InputMaybe<UserCreateNestedOneWithoutEventsIssuedInput>;
  participants?: InputMaybe<UserCreateNestedManyWithoutEventsParticipatingInput>;
  responsibles?: InputMaybe<UserCreateNestedManyWithoutEventsResponsibleInput>;
  room: RoomCreateNestedOneWithoutEventsInput;
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type EventCreateManyInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  roomId: Scalars['String'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type EventCreateManyIssuedByInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  roomId: Scalars['String'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type EventCreateManyIssuedByInputEnvelope = {
  data: EventCreateManyIssuedByInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventCreateManyRoomInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  shortDescription: Scalars['String'];
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type EventCreateManyRoomInputEnvelope = {
  data: EventCreateManyRoomInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type EventCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutCategoriesInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutCategoriesInput>>>;
};

export type EventCreateNestedManyWithoutIssuedByInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutIssuedByInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutIssuedByInput>>>;
  createMany?: InputMaybe<EventCreateManyIssuedByInputEnvelope>;
};

export type EventCreateNestedManyWithoutParticipantsInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutParticipantsInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutParticipantsInput>>>;
};

export type EventCreateNestedManyWithoutResponsiblesInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutResponsiblesInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutResponsiblesInput>>>;
};

export type EventCreateNestedManyWithoutRoomInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutRoomInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutRoomInput>>>;
  createMany?: InputMaybe<EventCreateManyRoomInputEnvelope>;
};

export type EventCreateNestedOneWithoutChatInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutChatInput>;
  create?: InputMaybe<EventUncheckedCreateWithoutChatInput>;
};

export type EventCreateOrConnectWithoutCategoriesInput = {
  create: EventUncheckedCreateWithoutCategoriesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutChatInput = {
  create: EventUncheckedCreateWithoutChatInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutIssuedByInput = {
  create: EventUncheckedCreateWithoutIssuedByInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutParticipantsInput = {
  create: EventUncheckedCreateWithoutParticipantsInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutResponsiblesInput = {
  create: EventUncheckedCreateWithoutResponsiblesInput;
  where: EventWhereUniqueInput;
};

export type EventCreateOrConnectWithoutRoomInput = {
  create: EventUncheckedCreateWithoutRoomInput;
  where: EventWhereUniqueInput;
};

export type EventCreateWithoutCategoriesInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  chat?: InputMaybe<ChatCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  issuedBy?: InputMaybe<UserCreateNestedOneWithoutEventsIssuedInput>;
  participants?: InputMaybe<UserCreateNestedManyWithoutEventsParticipatingInput>;
  responsibles?: InputMaybe<UserCreateNestedManyWithoutEventsResponsibleInput>;
  room: RoomCreateNestedOneWithoutEventsInput;
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type EventCreateWithoutChatInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutEventsInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  issuedBy?: InputMaybe<UserCreateNestedOneWithoutEventsIssuedInput>;
  participants?: InputMaybe<UserCreateNestedManyWithoutEventsParticipatingInput>;
  responsibles?: InputMaybe<UserCreateNestedManyWithoutEventsResponsibleInput>;
  room: RoomCreateNestedOneWithoutEventsInput;
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type EventCreateWithoutIssuedByInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutEventsInput>;
  chat?: InputMaybe<ChatCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<UserCreateNestedManyWithoutEventsParticipatingInput>;
  responsibles?: InputMaybe<UserCreateNestedManyWithoutEventsResponsibleInput>;
  room: RoomCreateNestedOneWithoutEventsInput;
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type EventCreateWithoutParticipantsInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutEventsInput>;
  chat?: InputMaybe<ChatCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  issuedBy?: InputMaybe<UserCreateNestedOneWithoutEventsIssuedInput>;
  responsibles?: InputMaybe<UserCreateNestedManyWithoutEventsResponsibleInput>;
  room: RoomCreateNestedOneWithoutEventsInput;
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type EventCreateWithoutResponsiblesInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutEventsInput>;
  chat?: InputMaybe<ChatCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  issuedBy?: InputMaybe<UserCreateNestedOneWithoutEventsIssuedInput>;
  participants?: InputMaybe<UserCreateNestedManyWithoutEventsParticipatingInput>;
  room: RoomCreateNestedOneWithoutEventsInput;
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type EventCreateWithoutRoomInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutEventsInput>;
  chat?: InputMaybe<ChatCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  issuedBy?: InputMaybe<UserCreateNestedOneWithoutEventsIssuedInput>;
  participants?: InputMaybe<UserCreateNestedManyWithoutEventsParticipatingInput>;
  responsibles?: InputMaybe<UserCreateNestedManyWithoutEventsResponsibleInput>;
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type EventListRelationFilter = {
  every?: InputMaybe<EventWhereInput>;
  none?: InputMaybe<EventWhereInput>;
  some?: InputMaybe<EventWhereInput>;
};

export type EventMaxAggregateOutputType = {
  __typename?: 'EventMaxAggregateOutputType';
  approved?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  roomId?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type EventMaxOrderByAggregateInput = {
  approved?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  roomId?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EventMinAggregateOutputType = {
  __typename?: 'EventMinAggregateOutputType';
  approved?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  roomId?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type EventMinOrderByAggregateInput = {
  approved?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  roomId?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EventOrderByWithAggregationInput = {
  _count?: InputMaybe<EventCountOrderByAggregateInput>;
  _max?: InputMaybe<EventMaxOrderByAggregateInput>;
  _min?: InputMaybe<EventMinOrderByAggregateInput>;
  approved?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  roomId?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EventOrderByWithRelationInput = {
  approved?: InputMaybe<SortOrder>;
  categories?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  chat?: InputMaybe<ChatOrderByWithRelationInput>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  issuedBy?: InputMaybe<UserOrderByWithRelationInput>;
  participants?: InputMaybe<UserOrderByRelationAggregateInput>;
  responsibles?: InputMaybe<UserOrderByRelationAggregateInput>;
  room?: InputMaybe<RoomOrderByWithRelationInput>;
  roomId?: InputMaybe<SortOrder>;
  shortDescription?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type EventRelationFilter = {
  is?: InputMaybe<EventWhereInput>;
  isNot?: InputMaybe<EventWhereInput>;
};

export enum EventScalarFieldEnum {
  Approved = 'approved',
  Date = 'date',
  Description = 'description',
  Id = 'id',
  Image = 'image',
  RoomId = 'roomId',
  ShortDescription = 'shortDescription',
  Title = 'title',
  UserId = 'userId'
}

export type EventScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  approved?: InputMaybe<BoolFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  roomId?: InputMaybe<StringFilter>;
  shortDescription?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type EventScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<EventScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<EventScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<EventScalarWhereWithAggregatesInput>>>;
  approved?: InputMaybe<BoolWithAggregatesFilter>;
  date?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  roomId?: InputMaybe<StringWithAggregatesFilter>;
  shortDescription?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type EventUncheckedCreateInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutEventsInput>;
  chat?: InputMaybe<ChatUncheckedCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<UserUncheckedCreateNestedManyWithoutEventsParticipatingInput>;
  responsibles?: InputMaybe<UserUncheckedCreateNestedManyWithoutEventsResponsibleInput>;
  roomId: Scalars['String'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type EventUncheckedCreateNestedManyWithoutCategoriesInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutCategoriesInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutCategoriesInput>>>;
};

export type EventUncheckedCreateNestedManyWithoutIssuedByInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutIssuedByInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutIssuedByInput>>>;
  createMany?: InputMaybe<EventCreateManyIssuedByInputEnvelope>;
};

export type EventUncheckedCreateNestedManyWithoutParticipantsInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutParticipantsInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutParticipantsInput>>>;
};

export type EventUncheckedCreateNestedManyWithoutResponsiblesInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutResponsiblesInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutResponsiblesInput>>>;
};

export type EventUncheckedCreateNestedManyWithoutRoomInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutRoomInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutRoomInput>>>;
  createMany?: InputMaybe<EventCreateManyRoomInputEnvelope>;
};

export type EventUncheckedCreateWithoutCategoriesInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  chat?: InputMaybe<ChatUncheckedCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<UserUncheckedCreateNestedManyWithoutEventsParticipatingInput>;
  responsibles?: InputMaybe<UserUncheckedCreateNestedManyWithoutEventsResponsibleInput>;
  roomId: Scalars['String'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type EventUncheckedCreateWithoutChatInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutEventsInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<UserUncheckedCreateNestedManyWithoutEventsParticipatingInput>;
  responsibles?: InputMaybe<UserUncheckedCreateNestedManyWithoutEventsResponsibleInput>;
  roomId: Scalars['String'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type EventUncheckedCreateWithoutIssuedByInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutEventsInput>;
  chat?: InputMaybe<ChatUncheckedCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<UserUncheckedCreateNestedManyWithoutEventsParticipatingInput>;
  responsibles?: InputMaybe<UserUncheckedCreateNestedManyWithoutEventsResponsibleInput>;
  roomId: Scalars['String'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type EventUncheckedCreateWithoutParticipantsInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutEventsInput>;
  chat?: InputMaybe<ChatUncheckedCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  responsibles?: InputMaybe<UserUncheckedCreateNestedManyWithoutEventsResponsibleInput>;
  roomId: Scalars['String'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type EventUncheckedCreateWithoutResponsiblesInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutEventsInput>;
  chat?: InputMaybe<ChatUncheckedCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<UserUncheckedCreateNestedManyWithoutEventsParticipatingInput>;
  roomId: Scalars['String'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type EventUncheckedCreateWithoutRoomInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryUncheckedCreateNestedManyWithoutEventsInput>;
  chat?: InputMaybe<ChatUncheckedCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<UserUncheckedCreateNestedManyWithoutEventsParticipatingInput>;
  responsibles?: InputMaybe<UserUncheckedCreateNestedManyWithoutEventsResponsibleInput>;
  shortDescription: Scalars['String'];
  title: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type EventUncheckedUpdateInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutEventsNestedInput>;
  chat?: InputMaybe<ChatUncheckedUpdateOneWithoutEventNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  participants?: InputMaybe<UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput>;
  responsibles?: InputMaybe<UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput>;
  roomId?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUncheckedUpdateManyInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roomId?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUncheckedUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutCategoriesInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutCategoriesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<EventUpdateWithWhereUniqueWithoutCategoriesInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<EventUpdateManyWithWhereWithoutCategoriesInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<EventUpsertWithWhereUniqueWithoutCategoriesInput>>>;
};

export type EventUncheckedUpdateManyWithoutEventsInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roomId?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUncheckedUpdateManyWithoutEventsIssuedInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roomId?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EventUncheckedUpdateManyWithoutEventsParticipatingInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roomId?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUncheckedUpdateManyWithoutEventsResponsibleInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  roomId?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUncheckedUpdateManyWithoutIssuedByNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutIssuedByInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutIssuedByInput>>>;
  createMany?: InputMaybe<EventCreateManyIssuedByInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<EventUpdateWithWhereUniqueWithoutIssuedByInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<EventUpdateManyWithWhereWithoutIssuedByInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<EventUpsertWithWhereUniqueWithoutIssuedByInput>>>;
};

export type EventUncheckedUpdateManyWithoutParticipantsNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutParticipantsInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutParticipantsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<EventUpdateWithWhereUniqueWithoutParticipantsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<EventUpdateManyWithWhereWithoutParticipantsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<EventUpsertWithWhereUniqueWithoutParticipantsInput>>>;
};

export type EventUncheckedUpdateManyWithoutResponsiblesNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutResponsiblesInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutResponsiblesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<EventUpdateWithWhereUniqueWithoutResponsiblesInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<EventUpdateManyWithWhereWithoutResponsiblesInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<EventUpsertWithWhereUniqueWithoutResponsiblesInput>>>;
};

export type EventUncheckedUpdateManyWithoutRoomNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutRoomInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutRoomInput>>>;
  createMany?: InputMaybe<EventCreateManyRoomInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<EventUpdateWithWhereUniqueWithoutRoomInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<EventUpdateManyWithWhereWithoutRoomInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<EventUpsertWithWhereUniqueWithoutRoomInput>>>;
};

export type EventUncheckedUpdateWithoutCategoriesInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  chat?: InputMaybe<ChatUncheckedUpdateOneWithoutEventNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  participants?: InputMaybe<UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput>;
  responsibles?: InputMaybe<UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput>;
  roomId?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUncheckedUpdateWithoutChatInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutEventsNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  participants?: InputMaybe<UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput>;
  responsibles?: InputMaybe<UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput>;
  roomId?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUncheckedUpdateWithoutIssuedByInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutEventsNestedInput>;
  chat?: InputMaybe<ChatUncheckedUpdateOneWithoutEventNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  participants?: InputMaybe<UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput>;
  responsibles?: InputMaybe<UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput>;
  roomId?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EventUncheckedUpdateWithoutParticipantsInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutEventsNestedInput>;
  chat?: InputMaybe<ChatUncheckedUpdateOneWithoutEventNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  responsibles?: InputMaybe<UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput>;
  roomId?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUncheckedUpdateWithoutResponsiblesInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutEventsNestedInput>;
  chat?: InputMaybe<ChatUncheckedUpdateOneWithoutEventNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  participants?: InputMaybe<UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput>;
  roomId?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUncheckedUpdateWithoutRoomInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryUncheckedUpdateManyWithoutEventsNestedInput>;
  chat?: InputMaybe<ChatUncheckedUpdateOneWithoutEventNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  participants?: InputMaybe<UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput>;
  responsibles?: InputMaybe<UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  userId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type EventUpdateInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryUpdateManyWithoutEventsNestedInput>;
  chat?: InputMaybe<ChatUpdateOneWithoutEventNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issuedBy?: InputMaybe<UserUpdateOneWithoutEventsIssuedNestedInput>;
  participants?: InputMaybe<UserUpdateManyWithoutEventsParticipatingNestedInput>;
  responsibles?: InputMaybe<UserUpdateManyWithoutEventsResponsibleNestedInput>;
  room?: InputMaybe<RoomUpdateOneRequiredWithoutEventsNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EventUpdateManyMutationInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EventUpdateManyWithWhereWithoutCategoriesInput = {
  data: EventUncheckedUpdateManyWithoutEventsInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutIssuedByInput = {
  data: EventUncheckedUpdateManyWithoutEventsIssuedInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutParticipantsInput = {
  data: EventUncheckedUpdateManyWithoutEventsParticipatingInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutResponsiblesInput = {
  data: EventUncheckedUpdateManyWithoutEventsResponsibleInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithWhereWithoutRoomInput = {
  data: EventUncheckedUpdateManyWithoutEventsInput;
  where: EventScalarWhereInput;
};

export type EventUpdateManyWithoutCategoriesNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutCategoriesInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutCategoriesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<EventUpdateWithWhereUniqueWithoutCategoriesInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<EventUpdateManyWithWhereWithoutCategoriesInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<EventUpsertWithWhereUniqueWithoutCategoriesInput>>>;
};

export type EventUpdateManyWithoutIssuedByNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutIssuedByInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutIssuedByInput>>>;
  createMany?: InputMaybe<EventCreateManyIssuedByInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<EventUpdateWithWhereUniqueWithoutIssuedByInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<EventUpdateManyWithWhereWithoutIssuedByInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<EventUpsertWithWhereUniqueWithoutIssuedByInput>>>;
};

export type EventUpdateManyWithoutParticipantsNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutParticipantsInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutParticipantsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<EventUpdateWithWhereUniqueWithoutParticipantsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<EventUpdateManyWithWhereWithoutParticipantsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<EventUpsertWithWhereUniqueWithoutParticipantsInput>>>;
};

export type EventUpdateManyWithoutResponsiblesNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutResponsiblesInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutResponsiblesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<EventUpdateWithWhereUniqueWithoutResponsiblesInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<EventUpdateManyWithWhereWithoutResponsiblesInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<EventUpsertWithWhereUniqueWithoutResponsiblesInput>>>;
};

export type EventUpdateManyWithoutRoomNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<EventCreateOrConnectWithoutRoomInput>>>;
  create?: InputMaybe<Array<InputMaybe<EventCreateWithoutRoomInput>>>;
  createMany?: InputMaybe<EventCreateManyRoomInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<EventScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<EventWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<EventUpdateWithWhereUniqueWithoutRoomInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<EventUpdateManyWithWhereWithoutRoomInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<EventUpsertWithWhereUniqueWithoutRoomInput>>>;
};

export type EventUpdateOneRequiredWithoutChatNestedInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  connectOrCreate?: InputMaybe<EventCreateOrConnectWithoutChatInput>;
  create?: InputMaybe<EventUncheckedCreateWithoutChatInput>;
  update?: InputMaybe<EventUncheckedUpdateWithoutChatInput>;
  upsert?: InputMaybe<EventUpsertWithoutChatInput>;
};

export type EventUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: EventUncheckedUpdateWithoutCategoriesInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutIssuedByInput = {
  data: EventUncheckedUpdateWithoutIssuedByInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutParticipantsInput = {
  data: EventUncheckedUpdateWithoutParticipantsInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutResponsiblesInput = {
  data: EventUncheckedUpdateWithoutResponsiblesInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithWhereUniqueWithoutRoomInput = {
  data: EventUncheckedUpdateWithoutRoomInput;
  where: EventWhereUniqueInput;
};

export type EventUpdateWithoutCategoriesInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  chat?: InputMaybe<ChatUpdateOneWithoutEventNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issuedBy?: InputMaybe<UserUpdateOneWithoutEventsIssuedNestedInput>;
  participants?: InputMaybe<UserUpdateManyWithoutEventsParticipatingNestedInput>;
  responsibles?: InputMaybe<UserUpdateManyWithoutEventsResponsibleNestedInput>;
  room?: InputMaybe<RoomUpdateOneRequiredWithoutEventsNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutChatInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryUpdateManyWithoutEventsNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issuedBy?: InputMaybe<UserUpdateOneWithoutEventsIssuedNestedInput>;
  participants?: InputMaybe<UserUpdateManyWithoutEventsParticipatingNestedInput>;
  responsibles?: InputMaybe<UserUpdateManyWithoutEventsResponsibleNestedInput>;
  room?: InputMaybe<RoomUpdateOneRequiredWithoutEventsNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutIssuedByInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryUpdateManyWithoutEventsNestedInput>;
  chat?: InputMaybe<ChatUpdateOneWithoutEventNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  participants?: InputMaybe<UserUpdateManyWithoutEventsParticipatingNestedInput>;
  responsibles?: InputMaybe<UserUpdateManyWithoutEventsResponsibleNestedInput>;
  room?: InputMaybe<RoomUpdateOneRequiredWithoutEventsNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutParticipantsInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryUpdateManyWithoutEventsNestedInput>;
  chat?: InputMaybe<ChatUpdateOneWithoutEventNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issuedBy?: InputMaybe<UserUpdateOneWithoutEventsIssuedNestedInput>;
  responsibles?: InputMaybe<UserUpdateManyWithoutEventsResponsibleNestedInput>;
  room?: InputMaybe<RoomUpdateOneRequiredWithoutEventsNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutResponsiblesInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryUpdateManyWithoutEventsNestedInput>;
  chat?: InputMaybe<ChatUpdateOneWithoutEventNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issuedBy?: InputMaybe<UserUpdateOneWithoutEventsIssuedNestedInput>;
  participants?: InputMaybe<UserUpdateManyWithoutEventsParticipatingNestedInput>;
  room?: InputMaybe<RoomUpdateOneRequiredWithoutEventsNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EventUpdateWithoutRoomInput = {
  approved?: InputMaybe<BoolFieldUpdateOperationsInput>;
  categories?: InputMaybe<CategoryUpdateManyWithoutEventsNestedInput>;
  chat?: InputMaybe<ChatUpdateOneWithoutEventNestedInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  issuedBy?: InputMaybe<UserUpdateOneWithoutEventsIssuedNestedInput>;
  participants?: InputMaybe<UserUpdateManyWithoutEventsParticipatingNestedInput>;
  responsibles?: InputMaybe<UserUpdateManyWithoutEventsResponsibleNestedInput>;
  shortDescription?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type EventUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: EventUncheckedCreateWithoutCategoriesInput;
  update: EventUncheckedUpdateWithoutCategoriesInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutIssuedByInput = {
  create: EventUncheckedCreateWithoutIssuedByInput;
  update: EventUncheckedUpdateWithoutIssuedByInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutParticipantsInput = {
  create: EventUncheckedCreateWithoutParticipantsInput;
  update: EventUncheckedUpdateWithoutParticipantsInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutResponsiblesInput = {
  create: EventUncheckedCreateWithoutResponsiblesInput;
  update: EventUncheckedUpdateWithoutResponsiblesInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithWhereUniqueWithoutRoomInput = {
  create: EventUncheckedCreateWithoutRoomInput;
  update: EventUncheckedUpdateWithoutRoomInput;
  where: EventWhereUniqueInput;
};

export type EventUpsertWithoutChatInput = {
  create: EventUncheckedCreateWithoutChatInput;
  update: EventUncheckedUpdateWithoutChatInput;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<EventWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<EventWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<EventWhereInput>>>;
  approved?: InputMaybe<BoolFilter>;
  categories?: InputMaybe<CategoryListRelationFilter>;
  chat?: InputMaybe<ChatWhereInput>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  issuedBy?: InputMaybe<UserWhereInput>;
  participants?: InputMaybe<UserListRelationFilter>;
  responsibles?: InputMaybe<UserListRelationFilter>;
  room?: InputMaybe<RoomWhereInput>;
  roomId?: InputMaybe<StringFilter>;
  shortDescription?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type EventWhereUniqueInput = {
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

export type IssueEventInput = {
  approved?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<CategoryCreateNestedManyWithoutEventsInput>;
  chat?: InputMaybe<ChatCreateNestedOneWithoutEventInput>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  participants?: InputMaybe<UserCreateNestedManyWithoutEventsParticipatingInput>;
  responsibles?: InputMaybe<UserCreateNestedManyWithoutEventsResponsibleInput>;
  room: RoomCreateNestedOneWithoutEventsInput;
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  chat: Chat;
  chatId: Scalars['String'];
  id: Scalars['String'];
  message: Scalars['String'];
  sender: User;
  sentDate: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type MessageCountAggregateOutputType = {
  __typename?: 'MessageCountAggregateOutputType';
  _all: Scalars['Int'];
  chatId: Scalars['Int'];
  id: Scalars['Int'];
  message: Scalars['Int'];
  sentDate: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MessageCountOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  sentDate?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MessageCreateInput = {
  chat: ChatCreateNestedOneWithoutMessagesInput;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sender: UserCreateNestedOneWithoutMessagesInput;
  sentDate?: InputMaybe<Scalars['DateTime']>;
};

export type MessageCreateManyChatInput = {
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sentDate?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type MessageCreateManyChatInputEnvelope = {
  data: MessageCreateManyChatInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateManyInput = {
  chatId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sentDate?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type MessageCreateManySenderInput = {
  chatId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sentDate?: InputMaybe<Scalars['DateTime']>;
};

export type MessageCreateManySenderInputEnvelope = {
  data: MessageCreateManySenderInput;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MessageCreateNestedManyWithoutChatInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutChatInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutChatInput>>>;
  createMany?: InputMaybe<MessageCreateManyChatInputEnvelope>;
};

export type MessageCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutSenderInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutSenderInput>>>;
  createMany?: InputMaybe<MessageCreateManySenderInputEnvelope>;
};

export type MessageCreateOrConnectWithoutChatInput = {
  create: MessageUncheckedCreateWithoutChatInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateOrConnectWithoutSenderInput = {
  create: MessageUncheckedCreateWithoutSenderInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateWithoutChatInput = {
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sender: UserCreateNestedOneWithoutMessagesInput;
  sentDate?: InputMaybe<Scalars['DateTime']>;
};

export type MessageCreateWithoutSenderInput = {
  chat: ChatCreateNestedOneWithoutMessagesInput;
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sentDate?: InputMaybe<Scalars['DateTime']>;
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageMaxAggregateOutputType = {
  __typename?: 'MessageMaxAggregateOutputType';
  chatId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  sentDate?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type MessageMaxOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  sentDate?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MessageMinAggregateOutputType = {
  __typename?: 'MessageMinAggregateOutputType';
  chatId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  sentDate?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type MessageMinOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  sentDate?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithAggregationInput = {
  _count?: InputMaybe<MessageCountOrderByAggregateInput>;
  _max?: InputMaybe<MessageMaxOrderByAggregateInput>;
  _min?: InputMaybe<MessageMinOrderByAggregateInput>;
  chatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  sentDate?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MessageOrderByWithRelationInput = {
  chat?: InputMaybe<ChatOrderByWithRelationInput>;
  chatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  sender?: InputMaybe<UserOrderByWithRelationInput>;
  sentDate?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum MessageScalarFieldEnum {
  ChatId = 'chatId',
  Id = 'id',
  Message = 'message',
  SentDate = 'sentDate',
  UserId = 'userId'
}

export type MessageScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  chatId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  sentDate?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MessageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<MessageScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MessageScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MessageScalarWhereWithAggregatesInput>>>;
  chatId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  message?: InputMaybe<StringWithAggregatesFilter>;
  sentDate?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type MessageUncheckedCreateInput = {
  chatId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sentDate?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type MessageUncheckedCreateNestedManyWithoutChatInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutChatInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutChatInput>>>;
  createMany?: InputMaybe<MessageCreateManyChatInputEnvelope>;
};

export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutSenderInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutSenderInput>>>;
  createMany?: InputMaybe<MessageCreateManySenderInputEnvelope>;
};

export type MessageUncheckedCreateWithoutChatInput = {
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sentDate?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type MessageUncheckedCreateWithoutSenderInput = {
  chatId: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  sentDate?: InputMaybe<Scalars['DateTime']>;
};

export type MessageUncheckedUpdateInput = {
  chatId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  sentDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUncheckedUpdateManyInput = {
  chatId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  sentDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutChatInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutChatInput>>>;
  createMany?: InputMaybe<MessageCreateManyChatInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<MessageUpdateWithWhereUniqueWithoutChatInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<MessageUpdateManyWithWhereWithoutChatInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<MessageUpsertWithWhereUniqueWithoutChatInput>>>;
};

export type MessageUncheckedUpdateManyWithoutMessagesInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  sentDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutSenderInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutSenderInput>>>;
  createMany?: InputMaybe<MessageCreateManySenderInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<MessageUpdateWithWhereUniqueWithoutSenderInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<MessageUpdateManyWithWhereWithoutSenderInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<MessageUpsertWithWhereUniqueWithoutSenderInput>>>;
};

export type MessageUncheckedUpdateWithoutChatInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  sentDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MessageUncheckedUpdateWithoutSenderInput = {
  chatId?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  sentDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateInput = {
  chat?: InputMaybe<ChatUpdateOneRequiredWithoutMessagesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutMessagesNestedInput>;
  sentDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  sentDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateManyWithWhereWithoutChatInput = {
  data: MessageUncheckedUpdateManyWithoutMessagesInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithWhereWithoutSenderInput = {
  data: MessageUncheckedUpdateManyWithoutMessagesInput;
  where: MessageScalarWhereInput;
};

export type MessageUpdateManyWithoutChatNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutChatInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutChatInput>>>;
  createMany?: InputMaybe<MessageCreateManyChatInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<MessageUpdateWithWhereUniqueWithoutChatInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<MessageUpdateManyWithWhereWithoutChatInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<MessageUpsertWithWhereUniqueWithoutChatInput>>>;
};

export type MessageUpdateManyWithoutSenderNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MessageCreateOrConnectWithoutSenderInput>>>;
  create?: InputMaybe<Array<InputMaybe<MessageCreateWithoutSenderInput>>>;
  createMany?: InputMaybe<MessageCreateManySenderInputEnvelope>;
  delete?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<MessageScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<MessageWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<MessageUpdateWithWhereUniqueWithoutSenderInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<MessageUpdateManyWithWhereWithoutSenderInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<MessageUpsertWithWhereUniqueWithoutSenderInput>>>;
};

export type MessageUpdateWithWhereUniqueWithoutChatInput = {
  data: MessageUncheckedUpdateWithoutChatInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
  data: MessageUncheckedUpdateWithoutSenderInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpdateWithoutChatInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  sender?: InputMaybe<UserUpdateOneRequiredWithoutMessagesNestedInput>;
  sentDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpdateWithoutSenderInput = {
  chat?: InputMaybe<ChatUpdateOneRequiredWithoutMessagesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  sentDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MessageUpsertWithWhereUniqueWithoutChatInput = {
  create: MessageUncheckedCreateWithoutChatInput;
  update: MessageUncheckedUpdateWithoutChatInput;
  where: MessageWhereUniqueInput;
};

export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
  create: MessageUncheckedCreateWithoutSenderInput;
  update: MessageUncheckedUpdateWithoutSenderInput;
  where: MessageWhereUniqueInput;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<MessageWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MessageWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MessageWhereInput>>>;
  chat?: InputMaybe<ChatWhereInput>;
  chatId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  message?: InputMaybe<StringFilter>;
  sender?: InputMaybe<UserWhereInput>;
  sentDate?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MessageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  approveEvent: Event;
  createOneCategory: Category;
  createOneChat: Chat;
  createOneEvent: Event;
  createOneMessage: Message;
  createOneProfile: Profile;
  createOneRoom: Room;
  createOneUser: User;
  deleteManyCategory: BatchPayload;
  deleteManyChat: BatchPayload;
  deleteManyEvent: BatchPayload;
  deleteManyMessage: BatchPayload;
  deleteManyProfile: BatchPayload;
  deleteManyRoom: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneCategory?: Maybe<Category>;
  deleteOneChat?: Maybe<Chat>;
  deleteOneEvent?: Maybe<Event>;
  deleteOneMessage?: Maybe<Message>;
  deleteOneProfile?: Maybe<Profile>;
  deleteOneRoom?: Maybe<Room>;
  deleteOneUser?: Maybe<User>;
  issueEvent: Event;
  login: Token;
  registerForEvent: Event;
  sendMessage: Message;
  signup: Token;
  updateManyCategory: BatchPayload;
  updateManyChat: BatchPayload;
  updateManyEvent: BatchPayload;
  updateManyMessage: BatchPayload;
  updateManyProfile: BatchPayload;
  updateManyRoom: BatchPayload;
  updateManyUser: BatchPayload;
  updateMyProfile: Profile;
  updateOneCategory: Category;
  updateOneChat: Chat;
  updateOneEvent: Event;
  updateOneMessage: Message;
  updateOneProfile: Profile;
  updateOneRoom: Room;
  updateOneUser: User;
  upsertOneCategory: Category;
  upsertOneChat: Chat;
  upsertOneEvent: Event;
  upsertOneMessage: Message;
  upsertOneProfile: Profile;
  upsertOneRoom: Room;
  upsertOneUser: User;
};


export type MutationApproveEventArgs = {
  eventId: Scalars['String'];
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneChatArgs = {
  data: ChatCreateInput;
};


export type MutationCreateOneEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateOneMessageArgs = {
  data: MessageCreateInput;
};


export type MutationCreateOneProfileArgs = {
  data: ProfileCreateInput;
};


export type MutationCreateOneRoomArgs = {
  data: RoomCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCategoryArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteManyChatArgs = {
  where?: InputMaybe<ChatWhereInput>;
};


export type MutationDeleteManyEventArgs = {
  where?: InputMaybe<EventWhereInput>;
};


export type MutationDeleteManyMessageArgs = {
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationDeleteManyProfileArgs = {
  where?: InputMaybe<ProfileWhereInput>;
};


export type MutationDeleteManyRoomArgs = {
  where?: InputMaybe<RoomWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneChatArgs = {
  where: ChatWhereUniqueInput;
};


export type MutationDeleteOneEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteOneMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type MutationDeleteOneProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type MutationDeleteOneRoomArgs = {
  where: RoomWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationIssueEventArgs = {
  data: IssueEventInput;
};


export type MutationLoginArgs = {
  data: SignInInput;
};


export type MutationRegisterForEventArgs = {
  eventId: Scalars['String'];
};


export type MutationSendMessageArgs = {
  data: SendMessageInput;
};


export type MutationSignupArgs = {
  data: SignUpInput;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationUpdateManyChatArgs = {
  data: ChatUpdateManyMutationInput;
  where?: InputMaybe<ChatWhereInput>;
};


export type MutationUpdateManyEventArgs = {
  data: EventUpdateManyMutationInput;
  where?: InputMaybe<EventWhereInput>;
};


export type MutationUpdateManyMessageArgs = {
  data: MessageUpdateManyMutationInput;
  where?: InputMaybe<MessageWhereInput>;
};


export type MutationUpdateManyProfileArgs = {
  data: ProfileUpdateManyMutationInput;
  where?: InputMaybe<ProfileWhereInput>;
};


export type MutationUpdateManyRoomArgs = {
  data: RoomUpdateManyMutationInput;
  where?: InputMaybe<RoomWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateMyProfileArgs = {
  data: UpdateMyProfileInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneChatArgs = {
  data: ChatUpdateInput;
  where: ChatWhereUniqueInput;
};


export type MutationUpdateOneEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateOneMessageArgs = {
  data: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpdateOneProfileArgs = {
  data: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpdateOneRoomArgs = {
  data: RoomUpdateInput;
  where: RoomWhereUniqueInput;
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


export type MutationUpsertOneChatArgs = {
  create: ChatCreateInput;
  update: ChatUpdateInput;
  where: ChatWhereUniqueInput;
};


export type MutationUpsertOneEventArgs = {
  create: EventCreateInput;
  update: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpsertOneMessageArgs = {
  create: MessageCreateInput;
  update: MessageUpdateInput;
  where: MessageWhereUniqueInput;
};


export type MutationUpsertOneProfileArgs = {
  create: ProfileCreateInput;
  update: ProfileUpdateInput;
  where: ProfileWhereUniqueInput;
};


export type MutationUpsertOneRoomArgs = {
  create: RoomCreateInput;
  update: RoomUpdateInput;
  where: RoomWhereUniqueInput;
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

export type NestedEnumUserRoleFilter = {
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<InputMaybe<UserRole>>>;
  not?: InputMaybe<NestedEnumUserRoleFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserRole>>>;
};

export type NestedEnumUserRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumUserRoleFilter>;
  _min?: InputMaybe<NestedEnumUserRoleFilter>;
  equals?: InputMaybe<UserRole>;
  in?: InputMaybe<Array<InputMaybe<UserRole>>>;
  not?: InputMaybe<NestedEnumUserRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<UserRole>>>;
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

export type Profile = {
  __typename?: 'Profile';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  jobTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type ProfileCountAggregateOutputType = {
  __typename?: 'ProfileCountAggregateOutputType';
  _all: Scalars['Int'];
  avatar: Scalars['Int'];
  bio: Scalars['Int'];
  id: Scalars['Int'];
  jobTitle: Scalars['Int'];
  name: Scalars['Int'];
  surname: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type ProfileCountOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  surname?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProfileCreateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutProfileInput;
};

export type ProfileCreateManyInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ProfileCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileUncheckedCreateWithoutUserInput>;
};

export type ProfileCreateOrConnectWithoutUserInput = {
  create: ProfileUncheckedCreateWithoutUserInput;
  where: ProfileWhereUniqueInput;
};

export type ProfileCreateWithoutUserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProfileMaxAggregateOutputType = {
  __typename?: 'ProfileMaxAggregateOutputType';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProfileMaxOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  surname?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProfileMinAggregateOutputType = {
  __typename?: 'ProfileMinAggregateOutputType';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type ProfileMinOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  surname?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProfileOrderByWithAggregationInput = {
  _count?: InputMaybe<ProfileCountOrderByAggregateInput>;
  _max?: InputMaybe<ProfileMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProfileMinOrderByAggregateInput>;
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  surname?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ProfileOrderByWithRelationInput = {
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  surname?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type ProfileRelationFilter = {
  is?: InputMaybe<ProfileWhereInput>;
  isNot?: InputMaybe<ProfileWhereInput>;
};

export enum ProfileScalarFieldEnum {
  Avatar = 'avatar',
  Bio = 'bio',
  Id = 'id',
  JobTitle = 'jobTitle',
  Name = 'name',
  Surname = 'surname',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ProfileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<ProfileScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ProfileScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProfileScalarWhereWithAggregatesInput>>>;
  avatar?: InputMaybe<StringNullableWithAggregatesFilter>;
  bio?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  jobTitle?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  surname?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ProfileUncheckedCreateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileUncheckedCreateWithoutUserInput>;
};

export type ProfileUncheckedCreateWithoutUserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProfileUncheckedUpdateInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  surname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProfileUncheckedUpdateManyInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  surname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userId?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileUncheckedCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ProfileUncheckedUpdateWithoutUserInput>;
  upsert?: InputMaybe<ProfileUpsertWithoutUserInput>;
};

export type ProfileUncheckedUpdateWithoutUserInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  surname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProfileUpdateInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  surname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutProfileNestedInput>;
};

export type ProfileUpdateManyMutationInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  surname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProfileUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<ProfileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProfileCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<ProfileUncheckedCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ProfileUncheckedUpdateWithoutUserInput>;
  upsert?: InputMaybe<ProfileUpsertWithoutUserInput>;
};

export type ProfileUpdateWithoutUserInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  surname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ProfileUpsertWithoutUserInput = {
  create: ProfileUncheckedCreateWithoutUserInput;
  update: ProfileUncheckedUpdateWithoutUserInput;
};

export type ProfileWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<ProfileWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<ProfileWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<ProfileWhereInput>>>;
  avatar?: InputMaybe<StringNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  jobTitle?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  surname?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<StringFilter>;
};

export type ProfileWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCategory?: Maybe<AggregateCategory>;
  aggregateChat?: Maybe<AggregateChat>;
  aggregateEvent?: Maybe<AggregateEvent>;
  aggregateMessage?: Maybe<AggregateMessage>;
  aggregateProfile?: Maybe<AggregateProfile>;
  aggregateRoom?: Maybe<AggregateRoom>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstCategory?: Maybe<Category>;
  findFirstChat?: Maybe<Chat>;
  findFirstEvent?: Maybe<Event>;
  findFirstMessage?: Maybe<Message>;
  findFirstProfile?: Maybe<Profile>;
  findFirstRoom?: Maybe<Room>;
  findFirstUser?: Maybe<User>;
  findManyCategory: Array<Category>;
  findManyCategoryCount: Scalars['Int'];
  findManyChat: Array<Chat>;
  findManyChatCount: Scalars['Int'];
  findManyEvent: Array<Event>;
  findManyEventCount: Scalars['Int'];
  findManyMessage: Array<Message>;
  findManyMessageCount: Scalars['Int'];
  findManyProfile: Array<Profile>;
  findManyProfileCount: Scalars['Int'];
  findManyRoom: Array<Room>;
  findManyRoomCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueCategory?: Maybe<Category>;
  findUniqueChat?: Maybe<Chat>;
  findUniqueEvent?: Maybe<Event>;
  findUniqueMessage?: Maybe<Message>;
  findUniqueProfile?: Maybe<Profile>;
  findUniqueRoom?: Maybe<Room>;
  findUniqueUser?: Maybe<User>;
  me: User;
};


export type QueryAggregateCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<CategoryOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryAggregateChatArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<ChatOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryAggregateEventArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<EventOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryAggregateMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<MessageOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryAggregateProfileArgs = {
  cursor?: InputMaybe<ProfileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<ProfileOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryAggregateRoomArgs = {
  cursor?: InputMaybe<RoomWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<RoomOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoomWhereInput>;
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


export type QueryFindFirstChatArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ChatScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ChatOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryFindFirstEventArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<EventScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<EventOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFindFirstMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MessageScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MessageOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindFirstProfileArgs = {
  cursor?: InputMaybe<ProfileWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ProfileScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ProfileOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryFindFirstRoomArgs = {
  cursor?: InputMaybe<RoomWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<RoomScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<RoomOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoomWhereInput>;
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


export type QueryFindManyChatArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ChatScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ChatOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryFindManyChatCountArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ChatScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ChatOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryFindManyEventArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<EventScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<EventOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFindManyEventCountArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<EventScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<EventOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryFindManyMessageArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MessageScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MessageOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindManyMessageCountArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MessageScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MessageOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};


export type QueryFindManyProfileArgs = {
  cursor?: InputMaybe<ProfileWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ProfileScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ProfileOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryFindManyProfileCountArgs = {
  cursor?: InputMaybe<ProfileWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<ProfileScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<ProfileOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProfileWhereInput>;
};


export type QueryFindManyRoomArgs = {
  cursor?: InputMaybe<RoomWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<RoomScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<RoomOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoomWhereInput>;
};


export type QueryFindManyRoomCountArgs = {
  cursor?: InputMaybe<RoomWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<RoomScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<RoomOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoomWhereInput>;
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


export type QueryFindUniqueChatArgs = {
  where: ChatWhereUniqueInput;
};


export type QueryFindUniqueEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryFindUniqueMessageArgs = {
  where: MessageWhereUniqueInput;
};


export type QueryFindUniqueProfileArgs = {
  where: ProfileWhereUniqueInput;
};


export type QueryFindUniqueRoomArgs = {
  where: RoomWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Room = {
  __typename?: 'Room';
  _count: RoomCountOutputType;
  description?: Maybe<Scalars['String']>;
  events: Array<Event>;
  gallery: Array<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};


export type RoomEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<EventScalarFieldEnum>;
  orderBy?: InputMaybe<EventOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};

export type RoomCountAggregateOutputType = {
  __typename?: 'RoomCountAggregateOutputType';
  _all: Scalars['Int'];
  description: Scalars['Int'];
  gallery: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  title: Scalars['Int'];
};

export type RoomCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  gallery?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type RoomCountOutputType = {
  __typename?: 'RoomCountOutputType';
  events: Scalars['Int'];
};

export type RoomCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<EventCreateNestedManyWithoutRoomInput>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type RoomCreateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type RoomCreateNestedOneWithoutEventsInput = {
  connect?: InputMaybe<RoomWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoomCreateOrConnectWithoutEventsInput>;
  create?: InputMaybe<RoomUncheckedCreateWithoutEventsInput>;
};

export type RoomCreateOrConnectWithoutEventsInput = {
  create: RoomUncheckedCreateWithoutEventsInput;
  where: RoomWhereUniqueInput;
};

export type RoomCreateWithoutEventsInput = {
  description?: InputMaybe<Scalars['String']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type RoomCreategalleryInput = {
  set: Scalars['String'];
};

export type RoomMaxAggregateOutputType = {
  __typename?: 'RoomMaxAggregateOutputType';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type RoomMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type RoomMinAggregateOutputType = {
  __typename?: 'RoomMinAggregateOutputType';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type RoomMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type RoomOrderByWithAggregationInput = {
  _count?: InputMaybe<RoomCountOrderByAggregateInput>;
  _max?: InputMaybe<RoomMaxOrderByAggregateInput>;
  _min?: InputMaybe<RoomMinOrderByAggregateInput>;
  description?: InputMaybe<SortOrder>;
  gallery?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type RoomOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  events?: InputMaybe<EventOrderByRelationAggregateInput>;
  gallery?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type RoomRelationFilter = {
  is?: InputMaybe<RoomWhereInput>;
  isNot?: InputMaybe<RoomWhereInput>;
};

export enum RoomScalarFieldEnum {
  Description = 'description',
  Gallery = 'gallery',
  Id = 'id',
  Image = 'image',
  Title = 'title'
}

export type RoomScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<RoomScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<RoomScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RoomScalarWhereWithAggregatesInput>>>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  gallery?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type RoomUncheckedCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<EventUncheckedCreateNestedManyWithoutRoomInput>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type RoomUncheckedCreateWithoutEventsInput = {
  description?: InputMaybe<Scalars['String']>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type RoomUncheckedUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUncheckedUpdateManyWithoutRoomNestedInput>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoomUncheckedUpdateManyInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoomUncheckedUpdateWithoutEventsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoomUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  events?: InputMaybe<EventUpdateManyWithoutRoomNestedInput>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoomUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoomUpdateOneRequiredWithoutEventsNestedInput = {
  connect?: InputMaybe<RoomWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoomCreateOrConnectWithoutEventsInput>;
  create?: InputMaybe<RoomUncheckedCreateWithoutEventsInput>;
  update?: InputMaybe<RoomUncheckedUpdateWithoutEventsInput>;
  upsert?: InputMaybe<RoomUpsertWithoutEventsInput>;
};

export type RoomUpdateWithoutEventsInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  gallery?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoomUpdategalleryInput = {
  push?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  set?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RoomUpsertWithoutEventsInput = {
  create: RoomUncheckedCreateWithoutEventsInput;
  update: RoomUncheckedUpdateWithoutEventsInput;
};

export type RoomWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<RoomWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<RoomWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<RoomWhereInput>>>;
  description?: InputMaybe<StringNullableFilter>;
  events?: InputMaybe<EventListRelationFilter>;
  gallery?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type RoomWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type SendMessageInput = {
  chatId: Scalars['String'];
  message: Scalars['String'];
};

export type SignInInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SignUpInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
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

export type Subscription = {
  __typename?: 'Subscription';
  chat?: Maybe<Message>;
};


export type SubscriptionChatArgs = {
  chatId: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  token?: Maybe<Scalars['String']>;
};

export enum TransactionIsolationLevel {
  ReadCommitted = 'ReadCommitted',
  ReadUncommitted = 'ReadUncommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable'
}

export type UpdateMyProfileInput = {
  avatar?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  jobTitle?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  surname?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type User = {
  __typename?: 'User';
  _count: UserCountOutputType;
  chats: Array<Chat>;
  child?: Maybe<User>;
  createdAt: Scalars['DateTime'];
  eventsIssued: Array<Event>;
  eventsParticipating: Array<Event>;
  eventsResponsible: Array<Event>;
  id: Scalars['String'];
  messages: Array<Message>;
  parent?: Maybe<User>;
  parentId?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  profile?: Maybe<Profile>;
  role: UserRole;
  username: Scalars['String'];
};


export type UserChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<ChatScalarFieldEnum>;
  orderBy?: InputMaybe<ChatOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type UserEventsIssuedArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<EventScalarFieldEnum>;
  orderBy?: InputMaybe<EventOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type UserEventsParticipatingArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<EventScalarFieldEnum>;
  orderBy?: InputMaybe<EventOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type UserEventsResponsibleArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  distinct?: InputMaybe<EventScalarFieldEnum>;
  orderBy?: InputMaybe<EventOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type UserMessagesArgs = {
  cursor?: InputMaybe<MessageWhereUniqueInput>;
  distinct?: InputMaybe<MessageScalarFieldEnum>;
  orderBy?: InputMaybe<MessageOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MessageWhereInput>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  parentId: Scalars['Int'];
  password: Scalars['Int'];
  role: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCountOutputType = {
  __typename?: 'UserCountOutputType';
  chats: Scalars['Int'];
  eventsIssued: Scalars['Int'];
  eventsParticipating: Scalars['Int'];
  eventsResponsible: Scalars['Int'];
  messages: Scalars['Int'];
};

export type UserCreateInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  parent?: InputMaybe<UserCreateNestedOneWithoutChildInput>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: UserRole;
  username: Scalars['String'];
};

export type UserCreateNestedManyWithoutChatsInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutChatsInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutChatsInput>>>;
};

export type UserCreateNestedManyWithoutEventsParticipatingInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutEventsParticipatingInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutEventsParticipatingInput>>>;
};

export type UserCreateNestedManyWithoutEventsResponsibleInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutEventsResponsibleInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutEventsResponsibleInput>>>;
};

export type UserCreateNestedOneWithoutChildInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChildInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutChildInput>;
};

export type UserCreateNestedOneWithoutEventsIssuedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEventsIssuedInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutEventsIssuedInput>;
};

export type UserCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutMessagesInput>;
};

export type UserCreateNestedOneWithoutParentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutParentInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutParentInput>;
};

export type UserCreateNestedOneWithoutProfileInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProfileInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutProfileInput>;
};

export type UserCreateOrConnectWithoutChatsInput = {
  create: UserUncheckedCreateWithoutChatsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChildInput = {
  create: UserUncheckedCreateWithoutChildInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEventsIssuedInput = {
  create: UserUncheckedCreateWithoutEventsIssuedInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEventsParticipatingInput = {
  create: UserUncheckedCreateWithoutEventsParticipatingInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutEventsResponsibleInput = {
  create: UserUncheckedCreateWithoutEventsResponsibleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMessagesInput = {
  create: UserUncheckedCreateWithoutMessagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutParentInput = {
  create: UserUncheckedCreateWithoutParentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutProfileInput = {
  create: UserUncheckedCreateWithoutProfileInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutChatsInput = {
  child?: InputMaybe<UserCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  parent?: InputMaybe<UserCreateNestedOneWithoutChildInput>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserCreateWithoutChildInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutMembersInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  parent?: InputMaybe<UserCreateNestedOneWithoutChildInput>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserCreateWithoutEventsIssuedInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsParticipating?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  parent?: InputMaybe<UserCreateNestedOneWithoutChildInput>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserCreateWithoutEventsParticipatingInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventCreateNestedManyWithoutIssuedByInput>;
  eventsResponsible?: InputMaybe<EventCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  parent?: InputMaybe<UserCreateNestedOneWithoutChildInput>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserCreateWithoutEventsResponsibleInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  parent?: InputMaybe<UserCreateNestedOneWithoutChildInput>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserCreateWithoutMessagesInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<UserCreateNestedOneWithoutChildInput>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserCreateWithoutParentInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserCreateWithoutProfileInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutSenderInput>;
  parent?: InputMaybe<UserCreateNestedOneWithoutChildInput>;
  password: Scalars['String'];
  role: UserRole;
  username: Scalars['String'];
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  chats?: InputMaybe<ChatOrderByRelationAggregateInput>;
  child?: InputMaybe<UserOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  eventsIssued?: InputMaybe<EventOrderByRelationAggregateInput>;
  eventsParticipating?: InputMaybe<EventOrderByRelationAggregateInput>;
  eventsResponsible?: InputMaybe<EventOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  messages?: InputMaybe<MessageOrderByRelationAggregateInput>;
  parent?: InputMaybe<UserOrderByWithRelationInput>;
  parentId?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profile?: InputMaybe<ProfileOrderByWithRelationInput>;
  role?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserRole {
  Dean = 'Dean',
  Parent = 'Parent',
  Staff = 'Staff',
  Student = 'Student'
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ParentId = 'parentId',
  Password = 'password',
  Role = 'role',
  Username = 'username'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumUserRoleFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  parentId?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumUserRoleWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserUncheckedCreateInput = {
  chats?: InputMaybe<ChatUncheckedCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserUncheckedCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventUncheckedCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventUncheckedCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventUncheckedCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutSenderInput>;
  parentId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileUncheckedCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserUncheckedCreateNestedManyWithoutChatsInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutChatsInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutChatsInput>>>;
};

export type UserUncheckedCreateNestedManyWithoutEventsParticipatingInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutEventsParticipatingInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutEventsParticipatingInput>>>;
};

export type UserUncheckedCreateNestedManyWithoutEventsResponsibleInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutEventsResponsibleInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutEventsResponsibleInput>>>;
};

export type UserUncheckedCreateNestedOneWithoutParentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutParentInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutParentInput>;
};

export type UserUncheckedCreateWithoutChatsInput = {
  child?: InputMaybe<UserUncheckedCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventUncheckedCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventUncheckedCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventUncheckedCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutSenderInput>;
  parentId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileUncheckedCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserUncheckedCreateWithoutChildInput = {
  chats?: InputMaybe<ChatUncheckedCreateNestedManyWithoutMembersInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventUncheckedCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventUncheckedCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventUncheckedCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutSenderInput>;
  parentId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileUncheckedCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserUncheckedCreateWithoutEventsIssuedInput = {
  chats?: InputMaybe<ChatUncheckedCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserUncheckedCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsParticipating?: InputMaybe<EventUncheckedCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventUncheckedCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutSenderInput>;
  parentId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileUncheckedCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserUncheckedCreateWithoutEventsParticipatingInput = {
  chats?: InputMaybe<ChatUncheckedCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserUncheckedCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventUncheckedCreateNestedManyWithoutIssuedByInput>;
  eventsResponsible?: InputMaybe<EventUncheckedCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutSenderInput>;
  parentId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileUncheckedCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserUncheckedCreateWithoutEventsResponsibleInput = {
  chats?: InputMaybe<ChatUncheckedCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserUncheckedCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventUncheckedCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventUncheckedCreateNestedManyWithoutParticipantsInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutSenderInput>;
  parentId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileUncheckedCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserUncheckedCreateWithoutMessagesInput = {
  chats?: InputMaybe<ChatUncheckedCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserUncheckedCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventUncheckedCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventUncheckedCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventUncheckedCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileUncheckedCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserUncheckedCreateWithoutParentInput = {
  chats?: InputMaybe<ChatUncheckedCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserUncheckedCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventUncheckedCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventUncheckedCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventUncheckedCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutSenderInput>;
  password: Scalars['String'];
  profile?: InputMaybe<ProfileUncheckedCreateNestedOneWithoutUserInput>;
  role: UserRole;
  username: Scalars['String'];
};

export type UserUncheckedCreateWithoutProfileInput = {
  chats?: InputMaybe<ChatUncheckedCreateNestedManyWithoutMembersInput>;
  child?: InputMaybe<UserUncheckedCreateNestedOneWithoutParentInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventsIssued?: InputMaybe<EventUncheckedCreateNestedManyWithoutIssuedByInput>;
  eventsParticipating?: InputMaybe<EventUncheckedCreateNestedManyWithoutParticipantsInput>;
  eventsResponsible?: InputMaybe<EventUncheckedCreateNestedManyWithoutResponsiblesInput>;
  id?: InputMaybe<Scalars['String']>;
  messages?: InputMaybe<MessageUncheckedCreateNestedManyWithoutSenderInput>;
  parentId?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  role: UserRole;
  username: Scalars['String'];
};

export type UserUncheckedUpdateInput = {
  chats?: InputMaybe<ChatUncheckedUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUncheckedUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUncheckedUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUncheckedUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUncheckedUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutSenderNestedInput>;
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUncheckedUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyWithoutChatsNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutChatsInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutChatsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserUpdateWithWhereUniqueWithoutChatsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserUpdateManyWithWhereWithoutChatsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserUpsertWithWhereUniqueWithoutChatsInput>>>;
};

export type UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutEventsParticipatingInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutEventsParticipatingInput>>>;
  delete?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserUpdateWithWhereUniqueWithoutEventsParticipatingInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserUpdateManyWithWhereWithoutEventsParticipatingInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserUpsertWithWhereUniqueWithoutEventsParticipatingInput>>>;
};

export type UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutEventsResponsibleInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutEventsResponsibleInput>>>;
  delete?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserUpdateWithWhereUniqueWithoutEventsResponsibleInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserUpdateManyWithWhereWithoutEventsResponsibleInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserUpsertWithWhereUniqueWithoutEventsResponsibleInput>>>;
};

export type UserUncheckedUpdateManyWithoutMembersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyWithoutParticipantsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyWithoutResponsiblesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateOneWithoutParentNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutParentInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutParentInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUncheckedUpdateWithoutParentInput>;
  upsert?: InputMaybe<UserUpsertWithoutParentInput>;
};

export type UserUncheckedUpdateWithoutChatsInput = {
  child?: InputMaybe<UserUncheckedUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUncheckedUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUncheckedUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUncheckedUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutSenderNestedInput>;
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUncheckedUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutChildInput = {
  chats?: InputMaybe<ChatUncheckedUpdateManyWithoutMembersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUncheckedUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUncheckedUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUncheckedUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutSenderNestedInput>;
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUncheckedUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutEventsIssuedInput = {
  chats?: InputMaybe<ChatUncheckedUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUncheckedUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsParticipating?: InputMaybe<EventUncheckedUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUncheckedUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutSenderNestedInput>;
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUncheckedUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutEventsParticipatingInput = {
  chats?: InputMaybe<ChatUncheckedUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUncheckedUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUncheckedUpdateManyWithoutIssuedByNestedInput>;
  eventsResponsible?: InputMaybe<EventUncheckedUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutSenderNestedInput>;
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUncheckedUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutEventsResponsibleInput = {
  chats?: InputMaybe<ChatUncheckedUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUncheckedUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUncheckedUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUncheckedUpdateManyWithoutParticipantsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutSenderNestedInput>;
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUncheckedUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutMessagesInput = {
  chats?: InputMaybe<ChatUncheckedUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUncheckedUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUncheckedUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUncheckedUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUncheckedUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUncheckedUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutParentInput = {
  chats?: InputMaybe<ChatUncheckedUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUncheckedUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUncheckedUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUncheckedUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUncheckedUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutSenderNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUncheckedUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateWithoutProfileInput = {
  chats?: InputMaybe<ChatUncheckedUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUncheckedUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUncheckedUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUncheckedUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUncheckedUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUncheckedUpdateManyWithoutSenderNestedInput>;
  parentId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  parent?: InputMaybe<UserUpdateOneWithoutChildNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutChatsInput = {
  data: UserUncheckedUpdateManyWithoutMembersInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutEventsParticipatingInput = {
  data: UserUncheckedUpdateManyWithoutParticipantsInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutEventsResponsibleInput = {
  data: UserUncheckedUpdateManyWithoutResponsiblesInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutChatsNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutChatsInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutChatsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserUpdateWithWhereUniqueWithoutChatsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserUpdateManyWithWhereWithoutChatsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserUpsertWithWhereUniqueWithoutChatsInput>>>;
};

export type UserUpdateManyWithoutEventsParticipatingNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutEventsParticipatingInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutEventsParticipatingInput>>>;
  delete?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserUpdateWithWhereUniqueWithoutEventsParticipatingInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserUpdateManyWithWhereWithoutEventsParticipatingInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserUpsertWithWhereUniqueWithoutEventsParticipatingInput>>>;
};

export type UserUpdateManyWithoutEventsResponsibleNestedInput = {
  connect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<UserCreateOrConnectWithoutEventsResponsibleInput>>>;
  create?: InputMaybe<Array<InputMaybe<UserCreateWithoutEventsResponsibleInput>>>;
  delete?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<UserScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<UserWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<UserUpdateWithWhereUniqueWithoutEventsResponsibleInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<UserUpdateManyWithWhereWithoutEventsResponsibleInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<UserUpsertWithWhereUniqueWithoutEventsResponsibleInput>>>;
};

export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutMessagesInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutMessagesInput>;
  upsert?: InputMaybe<UserUpsertWithoutMessagesInput>;
};

export type UserUpdateOneRequiredWithoutProfileNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProfileInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutProfileInput>;
  update?: InputMaybe<UserUncheckedUpdateWithoutProfileInput>;
  upsert?: InputMaybe<UserUpsertWithoutProfileInput>;
};

export type UserUpdateOneWithoutChildNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChildInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutChildInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUncheckedUpdateWithoutChildInput>;
  upsert?: InputMaybe<UserUpsertWithoutChildInput>;
};

export type UserUpdateOneWithoutEventsIssuedNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutEventsIssuedInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutEventsIssuedInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUncheckedUpdateWithoutEventsIssuedInput>;
  upsert?: InputMaybe<UserUpsertWithoutEventsIssuedInput>;
};

export type UserUpdateOneWithoutParentNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutParentInput>;
  create?: InputMaybe<UserUncheckedCreateWithoutParentInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUncheckedUpdateWithoutParentInput>;
  upsert?: InputMaybe<UserUpsertWithoutParentInput>;
};

export type UserUpdateWithWhereUniqueWithoutChatsInput = {
  data: UserUncheckedUpdateWithoutChatsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutEventsParticipatingInput = {
  data: UserUncheckedUpdateWithoutEventsParticipatingInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutEventsResponsibleInput = {
  data: UserUncheckedUpdateWithoutEventsResponsibleInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutChatsInput = {
  child?: InputMaybe<UserUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  parent?: InputMaybe<UserUpdateOneWithoutChildNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChildInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutMembersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  parent?: InputMaybe<UserUpdateOneWithoutChildNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutEventsIssuedInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsParticipating?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  parent?: InputMaybe<UserUpdateOneWithoutChildNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutEventsParticipatingInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUpdateManyWithoutIssuedByNestedInput>;
  eventsResponsible?: InputMaybe<EventUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  parent?: InputMaybe<UserUpdateOneWithoutChildNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutEventsResponsibleInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  parent?: InputMaybe<UserUpdateOneWithoutChildNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMessagesInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  parent?: InputMaybe<UserUpdateOneWithoutChildNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutParentInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profile?: InputMaybe<ProfileUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutProfileInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutMembersNestedInput>;
  child?: InputMaybe<UserUpdateOneWithoutParentNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  eventsIssued?: InputMaybe<EventUpdateManyWithoutIssuedByNestedInput>;
  eventsParticipating?: InputMaybe<EventUpdateManyWithoutParticipantsNestedInput>;
  eventsResponsible?: InputMaybe<EventUpdateManyWithoutResponsiblesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  messages?: InputMaybe<MessageUpdateManyWithoutSenderNestedInput>;
  parent?: InputMaybe<UserUpdateOneWithoutChildNestedInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumUserRoleFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutChatsInput = {
  create: UserUncheckedCreateWithoutChatsInput;
  update: UserUncheckedUpdateWithoutChatsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutEventsParticipatingInput = {
  create: UserUncheckedCreateWithoutEventsParticipatingInput;
  update: UserUncheckedUpdateWithoutEventsParticipatingInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutEventsResponsibleInput = {
  create: UserUncheckedCreateWithoutEventsResponsibleInput;
  update: UserUncheckedUpdateWithoutEventsResponsibleInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutChildInput = {
  create: UserUncheckedCreateWithoutChildInput;
  update: UserUncheckedUpdateWithoutChildInput;
};

export type UserUpsertWithoutEventsIssuedInput = {
  create: UserUncheckedCreateWithoutEventsIssuedInput;
  update: UserUncheckedUpdateWithoutEventsIssuedInput;
};

export type UserUpsertWithoutMessagesInput = {
  create: UserUncheckedCreateWithoutMessagesInput;
  update: UserUncheckedUpdateWithoutMessagesInput;
};

export type UserUpsertWithoutParentInput = {
  create: UserUncheckedCreateWithoutParentInput;
  update: UserUncheckedUpdateWithoutParentInput;
};

export type UserUpsertWithoutProfileInput = {
  create: UserUncheckedCreateWithoutProfileInput;
  update: UserUncheckedUpdateWithoutProfileInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  chats?: InputMaybe<ChatListRelationFilter>;
  child?: InputMaybe<UserWhereInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventsIssued?: InputMaybe<EventListRelationFilter>;
  eventsParticipating?: InputMaybe<EventListRelationFilter>;
  eventsResponsible?: InputMaybe<EventListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  parent?: InputMaybe<UserWhereInput>;
  parentId?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  profile?: InputMaybe<ProfileWhereInput>;
  role?: InputMaybe<EnumUserRoleFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  data: SignInInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Token', token?: string | null } };

export type SignupMutationVariables = Exact<{
  data: SignUpInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'Token', token?: string | null } };

export type FindUniqueEventQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindUniqueEventQuery = { __typename?: 'Query', findUniqueEvent?: { __typename?: 'Event', title: string, description: string, shortDescription: string, date: any, image?: string | null, categories: Array<{ __typename?: 'Category', title: string }>, responsibles: Array<{ __typename?: 'User', profile?: { __typename?: 'Profile', name?: string | null, jobTitle?: string | null } | null }> } | null };

export type RegisterForEventMutationVariables = Exact<{
  eventId: Scalars['String'];
  username: Scalars['String'];
}>;


export type RegisterForEventMutation = { __typename?: 'Mutation', updateOneEvent: { __typename?: 'Event', title: string, participants: Array<{ __typename?: 'User', username: string }> } };

export type FindUniqueRoomQueryVariables = Exact<{
  roomId: Scalars['String'];
}>;


export type FindUniqueRoomQuery = { __typename?: 'Query', findUniqueRoom?: { __typename?: 'Room', title: string, image?: string | null, description?: string | null, gallery: Array<string> } | null, findManyEvent: Array<{ __typename?: 'Event', id: string, title: string, image?: string | null, shortDescription: string, description: string }> };

export type UpdateMyProfileMutationVariables = Exact<{
  data: UpdateMyProfileInput;
}>;


export type UpdateMyProfileMutation = { __typename?: 'Mutation', updateMyProfile: { __typename?: 'Profile', id: string } };


export const LoginDocument = gql`
    mutation login($data: SignInInput!) {
  login(data: $data) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation signup($data: SignUpInput!) {
  signup(data: $data) {
    token
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

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
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const FindUniqueEventDocument = gql`
    query findUniqueEvent($id: String!) {
  findUniqueEvent(where: {id: $id}) {
    title
    description
    shortDescription
    date
    image
    categories {
      title
    }
    responsibles {
      profile {
        name
        jobTitle
      }
    }
  }
}
    `;

/**
 * __useFindUniqueEventQuery__
 *
 * To run a query within a React component, call `useFindUniqueEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindUniqueEventQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueEventQuery, FindUniqueEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueEventQuery, FindUniqueEventQueryVariables>(FindUniqueEventDocument, options);
      }
export function useFindUniqueEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueEventQuery, FindUniqueEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueEventQuery, FindUniqueEventQueryVariables>(FindUniqueEventDocument, options);
        }
export type FindUniqueEventQueryHookResult = ReturnType<typeof useFindUniqueEventQuery>;
export type FindUniqueEventLazyQueryHookResult = ReturnType<typeof useFindUniqueEventLazyQuery>;
export type FindUniqueEventQueryResult = Apollo.QueryResult<FindUniqueEventQuery, FindUniqueEventQueryVariables>;
export const RegisterForEventDocument = gql`
    mutation registerForEvent($eventId: String!, $username: String!) {
  updateOneEvent(
    data: {participants: {connect: {username: $username}}}
    where: {id: $eventId}
  ) {
    title
    participants {
      username
    }
  }
}
    `;
export type RegisterForEventMutationFn = Apollo.MutationFunction<RegisterForEventMutation, RegisterForEventMutationVariables>;

/**
 * __useRegisterForEventMutation__
 *
 * To run a mutation, you first call `useRegisterForEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterForEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerForEventMutation, { data, loading, error }] = useRegisterForEventMutation({
 *   variables: {
 *      eventId: // value for 'eventId'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRegisterForEventMutation(baseOptions?: Apollo.MutationHookOptions<RegisterForEventMutation, RegisterForEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterForEventMutation, RegisterForEventMutationVariables>(RegisterForEventDocument, options);
      }
export type RegisterForEventMutationHookResult = ReturnType<typeof useRegisterForEventMutation>;
export type RegisterForEventMutationResult = Apollo.MutationResult<RegisterForEventMutation>;
export type RegisterForEventMutationOptions = Apollo.BaseMutationOptions<RegisterForEventMutation, RegisterForEventMutationVariables>;
export const FindUniqueRoomDocument = gql`
    query findUniqueRoom($roomId: String!) {
  findUniqueRoom(where: {id: $roomId}) {
    title
    image
    description
    gallery
  }
  findManyEvent(where: {roomId: {equals: $roomId}, approved: {equals: true}}) {
    id
    title
    image
    shortDescription
    description
  }
}
    `;

/**
 * __useFindUniqueRoomQuery__
 *
 * To run a query within a React component, call `useFindUniqueRoomQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUniqueRoomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUniqueRoomQuery({
 *   variables: {
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useFindUniqueRoomQuery(baseOptions: Apollo.QueryHookOptions<FindUniqueRoomQuery, FindUniqueRoomQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUniqueRoomQuery, FindUniqueRoomQueryVariables>(FindUniqueRoomDocument, options);
      }
export function useFindUniqueRoomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUniqueRoomQuery, FindUniqueRoomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUniqueRoomQuery, FindUniqueRoomQueryVariables>(FindUniqueRoomDocument, options);
        }
export type FindUniqueRoomQueryHookResult = ReturnType<typeof useFindUniqueRoomQuery>;
export type FindUniqueRoomLazyQueryHookResult = ReturnType<typeof useFindUniqueRoomLazyQuery>;
export type FindUniqueRoomQueryResult = Apollo.QueryResult<FindUniqueRoomQuery, FindUniqueRoomQueryVariables>;
export const UpdateMyProfileDocument = gql`
    mutation updateMyProfile($data: UpdateMyProfileInput!) {
  updateMyProfile(data: $data) {
    id
  }
}
    `;
export type UpdateMyProfileMutationFn = Apollo.MutationFunction<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>;

/**
 * __useUpdateMyProfileMutation__
 *
 * To run a mutation, you first call `useUpdateMyProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyProfileMutation, { data, loading, error }] = useUpdateMyProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateMyProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>(UpdateMyProfileDocument, options);
      }
export type UpdateMyProfileMutationHookResult = ReturnType<typeof useUpdateMyProfileMutation>;
export type UpdateMyProfileMutationResult = Apollo.MutationResult<UpdateMyProfileMutation>;
export type UpdateMyProfileMutationOptions = Apollo.BaseMutationOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>;
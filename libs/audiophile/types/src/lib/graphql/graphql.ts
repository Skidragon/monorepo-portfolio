import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageCategory: Array<Category>;
  imageProduct: Array<Product>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  productImages: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageCategoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


/** Asset system model */
export type AssetImageProductArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetProductImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageCategory?: InputMaybe<CategoryCreateManyInlineInput>;
  imageProduct?: InputMaybe<ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  productImages?: InputMaybe<ProductCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageCategory_every?: InputMaybe<CategoryWhereInput>;
  imageCategory_none?: InputMaybe<CategoryWhereInput>;
  imageCategory_some?: InputMaybe<CategoryWhereInput>;
  imageProduct_every?: InputMaybe<ProductWhereInput>;
  imageProduct_none?: InputMaybe<ProductWhereInput>;
  imageProduct_some?: InputMaybe<ProductWhereInput>;
  productImages_every?: InputMaybe<ProductWhereInput>;
  productImages_none?: InputMaybe<ProductWhereInput>;
  productImages_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageCategory?: InputMaybe<CategoryUpdateManyInlineInput>;
  imageProduct?: InputMaybe<ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  productImages?: InputMaybe<ProductUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageCategory_every?: InputMaybe<CategoryWhereInput>;
  imageCategory_none?: InputMaybe<CategoryWhereInput>;
  imageCategory_some?: InputMaybe<CategoryWhereInput>;
  imageProduct_every?: InputMaybe<ProductWhereInput>;
  imageProduct_none?: InputMaybe<ProductWhereInput>;
  imageProduct_some?: InputMaybe<ProductWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  productImages_every?: InputMaybe<ProductWhereInput>;
  productImages_none?: InputMaybe<ProductWhereInput>;
  productImages_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Cart = Node & {
  __typename?: 'Cart';
  cartProducts: Array<CartProduct>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Cart>;
  /** List of Cart versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  userId: Scalars['String'];
};


export type CartCartProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CartProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CartProductWhereInput>;
};


export type CartCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CartDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CartHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CartPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CartScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CartUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CartConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CartWhereUniqueInput;
};

/** A connection to a list of items. */
export type CartConnection = {
  __typename?: 'CartConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CartEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CartCreateInput = {
  cartProducts?: InputMaybe<CartProductCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type CartCreateManyInlineInput = {
  /** Connect multiple existing Cart documents */
  connect?: InputMaybe<Array<CartWhereUniqueInput>>;
  /** Create and connect multiple existing Cart documents */
  create?: InputMaybe<Array<CartCreateInput>>;
};

export type CartCreateOneInlineInput = {
  /** Connect one existing Cart document */
  connect?: InputMaybe<CartWhereUniqueInput>;
  /** Create and connect one Cart document */
  create?: InputMaybe<CartCreateInput>;
};

/** An edge in a connection. */
export type CartEdge = {
  __typename?: 'CartEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Cart;
};

/** Identifies documents */
export type CartManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  cartProducts_every?: InputMaybe<CartProductWhereInput>;
  cartProducts_none?: InputMaybe<CartProductWhereInput>;
  cartProducts_some?: InputMaybe<CartProductWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  userId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  userId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  userId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  userId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  userId_starts_with?: InputMaybe<Scalars['String']>;
};

export enum CartOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserIdAsc = 'userId_ASC',
  UserIdDesc = 'userId_DESC'
}

export type CartProduct = Node & {
  __typename?: 'CartProduct';
  cart?: Maybe<Cart>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<CartProduct>;
  /** List of CartProduct versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  product?: Maybe<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quantity: Scalars['Int'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CartProductCartArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CartProductCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CartProductDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CartProductHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CartProductProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CartProductPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CartProductScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CartProductUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CartProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CartProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type CartProductConnection = {
  __typename?: 'CartProductConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CartProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CartProductCreateInput = {
  cart?: InputMaybe<CartCreateOneInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  product?: InputMaybe<ProductCreateOneInlineInput>;
  quantity: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CartProductCreateManyInlineInput = {
  /** Connect multiple existing CartProduct documents */
  connect?: InputMaybe<Array<CartProductWhereUniqueInput>>;
  /** Create and connect multiple existing CartProduct documents */
  create?: InputMaybe<Array<CartProductCreateInput>>;
};

export type CartProductCreateOneInlineInput = {
  /** Connect one existing CartProduct document */
  connect?: InputMaybe<CartProductWhereUniqueInput>;
  /** Create and connect one CartProduct document */
  create?: InputMaybe<CartProductCreateInput>;
};

/** An edge in a connection. */
export type CartProductEdge = {
  __typename?: 'CartProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CartProduct;
};

/** Identifies documents */
export type CartProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  cart?: InputMaybe<CartWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantity_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CartProductOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CartProductUpdateInput = {
  cart?: InputMaybe<CartUpdateOneInlineInput>;
  product?: InputMaybe<ProductUpdateOneInlineInput>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type CartProductUpdateManyInlineInput = {
  /** Connect multiple existing CartProduct documents */
  connect?: InputMaybe<Array<CartProductConnectInput>>;
  /** Create and connect multiple CartProduct documents */
  create?: InputMaybe<Array<CartProductCreateInput>>;
  /** Delete multiple CartProduct documents */
  delete?: InputMaybe<Array<CartProductWhereUniqueInput>>;
  /** Disconnect multiple CartProduct documents */
  disconnect?: InputMaybe<Array<CartProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CartProduct documents */
  set?: InputMaybe<Array<CartProductWhereUniqueInput>>;
  /** Update multiple CartProduct documents */
  update?: InputMaybe<Array<CartProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CartProduct documents */
  upsert?: InputMaybe<Array<CartProductUpsertWithNestedWhereUniqueInput>>;
};

export type CartProductUpdateManyInput = {
  quantity?: InputMaybe<Scalars['Int']>;
};

export type CartProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CartProductUpdateManyInput;
  /** Document search */
  where: CartProductWhereInput;
};

export type CartProductUpdateOneInlineInput = {
  /** Connect existing CartProduct document */
  connect?: InputMaybe<CartProductWhereUniqueInput>;
  /** Create and connect one CartProduct document */
  create?: InputMaybe<CartProductCreateInput>;
  /** Delete currently connected CartProduct document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CartProduct document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CartProduct document */
  update?: InputMaybe<CartProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CartProduct document */
  upsert?: InputMaybe<CartProductUpsertWithNestedWhereUniqueInput>;
};

export type CartProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CartProductUpdateInput;
  /** Unique document search */
  where: CartProductWhereUniqueInput;
};

export type CartProductUpsertInput = {
  /** Create document if it didn't exist */
  create: CartProductCreateInput;
  /** Update document if it exists */
  update: CartProductUpdateInput;
};

export type CartProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CartProductUpsertInput;
  /** Unique document search */
  where: CartProductWhereUniqueInput;
};

/** Identifies documents */
export type CartProductWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  cart?: InputMaybe<CartWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantity_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References CartProduct record uniquely */
export type CartProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CartUpdateInput = {
  cartProducts?: InputMaybe<CartProductUpdateManyInlineInput>;
  userId?: InputMaybe<Scalars['String']>;
};

export type CartUpdateManyInlineInput = {
  /** Connect multiple existing Cart documents */
  connect?: InputMaybe<Array<CartConnectInput>>;
  /** Create and connect multiple Cart documents */
  create?: InputMaybe<Array<CartCreateInput>>;
  /** Delete multiple Cart documents */
  delete?: InputMaybe<Array<CartWhereUniqueInput>>;
  /** Disconnect multiple Cart documents */
  disconnect?: InputMaybe<Array<CartWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Cart documents */
  set?: InputMaybe<Array<CartWhereUniqueInput>>;
  /** Update multiple Cart documents */
  update?: InputMaybe<Array<CartUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Cart documents */
  upsert?: InputMaybe<Array<CartUpsertWithNestedWhereUniqueInput>>;
};

export type CartUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type CartUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CartUpdateManyInput;
  /** Document search */
  where: CartWhereInput;
};

export type CartUpdateOneInlineInput = {
  /** Connect existing Cart document */
  connect?: InputMaybe<CartWhereUniqueInput>;
  /** Create and connect one Cart document */
  create?: InputMaybe<CartCreateInput>;
  /** Delete currently connected Cart document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Cart document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Cart document */
  update?: InputMaybe<CartUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Cart document */
  upsert?: InputMaybe<CartUpsertWithNestedWhereUniqueInput>;
};

export type CartUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CartUpdateInput;
  /** Unique document search */
  where: CartWhereUniqueInput;
};

export type CartUpsertInput = {
  /** Create document if it didn't exist */
  create: CartCreateInput;
  /** Update document if it exists */
  update: CartUpdateInput;
};

export type CartUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CartUpsertInput;
  /** Unique document search */
  where: CartWhereUniqueInput;
};

/** Identifies documents */
export type CartWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CartWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CartWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CartWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  cartProducts_every?: InputMaybe<CartProductWhereInput>;
  cartProducts_none?: InputMaybe<CartProductWhereInput>;
  cartProducts_some?: InputMaybe<CartProductWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  userId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  userId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  userId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  userId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  userId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  userId_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Cart record uniquely */
export type CartWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** Category of products, e.g. Menswear. */
export type Category = Node & {
  __typename?: 'Category';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Category>;
  /** List of Category versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image: Asset;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Category>;
  name: Scalars['String'];
  products: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Category of products, e.g. Menswear. */
export type CategoryCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Category of products, e.g. Menswear. */
export type CategoryCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Category of products, e.g. Menswear. */
export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Category of products, e.g. Menswear. */
export type CategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Category of products, e.g. Menswear. */
export type CategoryImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Category of products, e.g. Menswear. */
export type CategoryLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Category of products, e.g. Menswear. */
export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


/** Category of products, e.g. Menswear. */
export type CategoryPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Category of products, e.g. Menswear. */
export type CategoryPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Category of products, e.g. Menswear. */
export type CategoryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Category of products, e.g. Menswear. */
export type CategoryUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Category of products, e.g. Menswear. */
export type CategoryUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  image: AssetCreateOneInlineInput;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CategoryCreateLocalizationsInput>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateManyInlineInput>;
  /** slug input for default locale (en) */
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CategoryCreateLocalizationInput = {
  /** Localization input */
  data: CategoryCreateLocalizationDataInput;
  locale: Locale;
};

export type CategoryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CategoryCreateLocalizationInput>>;
};

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Category;
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CategoryUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<CategoryUpdateLocalizationsInput>;
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductUpdateManyInlineInput>;
  /** slug input for default locale (en) */
  slug?: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateLocalizationInput = {
  data: CategoryUpdateLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CategoryCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CategoryUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertLocalizationInput>>;
};

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
  /** Delete multiple Category documents */
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<CategoryUpdateManyLocalizationsInput>;
};

export type CategoryUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type CategoryUpdateManyLocalizationInput = {
  data: CategoryUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<CategoryUpdateManyLocalizationInput>>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryUpdateManyInput;
  /** Document search */
  where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
  /** Delete currently connected Category document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Category document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Category document */
  update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryUpdateInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
};

export type CategoryUpsertLocalizationInput = {
  create: CategoryCreateLocalizationDataInput;
  locale: Locale;
  update: CategoryUpdateLocalizationDataInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryUpsertInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Collection of products, e.g. Winter Sale. */
export type Collection = Node & {
  __typename?: 'Collection';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Collection>;
  /** List of Collection versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Collection>;
  name: Scalars['String'];
  products: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Collection of products, e.g. Winter Sale. */
export type CollectionUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CollectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CollectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type CollectionConnection = {
  __typename?: 'CollectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CollectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CollectionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CollectionCreateLocalizationsInput>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  products?: InputMaybe<ProductCreateManyInlineInput>;
  /** slug input for default locale (en) */
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CollectionCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CollectionCreateLocalizationInput = {
  /** Localization input */
  data: CollectionCreateLocalizationDataInput;
  locale: Locale;
};

export type CollectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CollectionCreateLocalizationInput>>;
};

export type CollectionCreateManyInlineInput = {
  /** Connect multiple existing Collection documents */
  connect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Create and connect multiple existing Collection documents */
  create?: InputMaybe<Array<CollectionCreateInput>>;
};

export type CollectionCreateOneInlineInput = {
  /** Connect one existing Collection document */
  connect?: InputMaybe<CollectionWhereUniqueInput>;
  /** Create and connect one Collection document */
  create?: InputMaybe<CollectionCreateInput>;
};

/** An edge in a connection. */
export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Collection;
};

/** Identifies documents */
export type CollectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CollectionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CollectionUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<CollectionUpdateLocalizationsInput>;
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<ProductUpdateManyInlineInput>;
  /** slug input for default locale (en) */
  slug?: InputMaybe<Scalars['String']>;
};

export type CollectionUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type CollectionUpdateLocalizationInput = {
  data: CollectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type CollectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CollectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CollectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CollectionUpsertLocalizationInput>>;
};

export type CollectionUpdateManyInlineInput = {
  /** Connect multiple existing Collection documents */
  connect?: InputMaybe<Array<CollectionConnectInput>>;
  /** Create and connect multiple Collection documents */
  create?: InputMaybe<Array<CollectionCreateInput>>;
  /** Delete multiple Collection documents */
  delete?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Disconnect multiple Collection documents */
  disconnect?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Collection documents */
  set?: InputMaybe<Array<CollectionWhereUniqueInput>>;
  /** Update multiple Collection documents */
  update?: InputMaybe<Array<CollectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Collection documents */
  upsert?: InputMaybe<Array<CollectionUpsertWithNestedWhereUniqueInput>>;
};

export type CollectionUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<CollectionUpdateManyLocalizationsInput>;
};

export type CollectionUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type CollectionUpdateManyLocalizationInput = {
  data: CollectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CollectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<CollectionUpdateManyLocalizationInput>>;
};

export type CollectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CollectionUpdateManyInput;
  /** Document search */
  where: CollectionWhereInput;
};

export type CollectionUpdateOneInlineInput = {
  /** Connect existing Collection document */
  connect?: InputMaybe<CollectionWhereUniqueInput>;
  /** Create and connect one Collection document */
  create?: InputMaybe<CollectionCreateInput>;
  /** Delete currently connected Collection document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Collection document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Collection document */
  update?: InputMaybe<CollectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Collection document */
  upsert?: InputMaybe<CollectionUpsertWithNestedWhereUniqueInput>;
};

export type CollectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CollectionUpdateInput;
  /** Unique document search */
  where: CollectionWhereUniqueInput;
};

export type CollectionUpsertInput = {
  /** Create document if it didn't exist */
  create: CollectionCreateInput;
  /** Update document if it exists */
  update: CollectionUpdateInput;
};

export type CollectionUpsertLocalizationInput = {
  create: CollectionCreateLocalizationDataInput;
  locale: Locale;
  update: CollectionUpdateLocalizationDataInput;
};

export type CollectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CollectionUpsertInput;
  /** Unique document search */
  where: CollectionWhereUniqueInput;
};

/** Identifies documents */
export type CollectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Collection record uniquely */
export type CollectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export type Currency = Node & {
  __typename?: 'Currency';
  code: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  default: Scalars['Boolean'];
  /** Get the document in other stages */
  documentInStages: Array<Currency>;
  /** List of Currency versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rate: Scalars['Float'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CurrencyCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CurrencyDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CurrencyHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CurrencyPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CurrencyScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CurrencyUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CurrencyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CurrencyWhereUniqueInput;
};

/** A connection to a list of items. */
export type CurrencyConnection = {
  __typename?: 'CurrencyConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CurrencyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CurrencyCreateInput = {
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  default: Scalars['Boolean'];
  rate: Scalars['Float'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CurrencyCreateManyInlineInput = {
  /** Connect multiple existing Currency documents */
  connect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  /** Create and connect multiple existing Currency documents */
  create?: InputMaybe<Array<CurrencyCreateInput>>;
};

export type CurrencyCreateOneInlineInput = {
  /** Connect one existing Currency document */
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  /** Create and connect one Currency document */
  create?: InputMaybe<CurrencyCreateInput>;
};

/** An edge in a connection. */
export type CurrencyEdge = {
  __typename?: 'CurrencyEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Currency;
};

/** Identifies documents */
export type CurrencyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  code_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  default?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  default_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rate?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  rate_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  rate_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  rate_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  rate_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  rate_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  rate_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  rate_not_in?: InputMaybe<Array<Scalars['Float']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CurrencyOrderByInput {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DefaultAsc = 'default_ASC',
  DefaultDesc = 'default_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RateAsc = 'rate_ASC',
  RateDesc = 'rate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CurrencyUpdateInput = {
  code?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  rate?: InputMaybe<Scalars['Float']>;
};

export type CurrencyUpdateManyInlineInput = {
  /** Connect multiple existing Currency documents */
  connect?: InputMaybe<Array<CurrencyConnectInput>>;
  /** Create and connect multiple Currency documents */
  create?: InputMaybe<Array<CurrencyCreateInput>>;
  /** Delete multiple Currency documents */
  delete?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  /** Disconnect multiple Currency documents */
  disconnect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Currency documents */
  set?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  /** Update multiple Currency documents */
  update?: InputMaybe<Array<CurrencyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Currency documents */
  upsert?: InputMaybe<Array<CurrencyUpsertWithNestedWhereUniqueInput>>;
};

export type CurrencyUpdateManyInput = {
  rate?: InputMaybe<Scalars['Float']>;
};

export type CurrencyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CurrencyUpdateManyInput;
  /** Document search */
  where: CurrencyWhereInput;
};

export type CurrencyUpdateOneInlineInput = {
  /** Connect existing Currency document */
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  /** Create and connect one Currency document */
  create?: InputMaybe<CurrencyCreateInput>;
  /** Delete currently connected Currency document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Currency document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Currency document */
  update?: InputMaybe<CurrencyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Currency document */
  upsert?: InputMaybe<CurrencyUpsertWithNestedWhereUniqueInput>;
};

export type CurrencyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CurrencyUpdateInput;
  /** Unique document search */
  where: CurrencyWhereUniqueInput;
};

export type CurrencyUpsertInput = {
  /** Create document if it didn't exist */
  create: CurrencyCreateInput;
  /** Update document if it exists */
  update: CurrencyUpdateInput;
};

export type CurrencyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CurrencyUpsertInput;
  /** Unique document search */
  where: CurrencyWhereUniqueInput;
};

/** Identifies documents */
export type CurrencyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  code_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  default?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  default_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rate?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  rate_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  rate_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  rate_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  rate_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  rate_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  rate_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  rate_not_in?: InputMaybe<Array<Scalars['Float']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Currency record uniquely */
export type CurrencyWhereUniqueInput = {
  code?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type Item = Node & {
  __typename?: 'Item';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Item>;
  /** List of Item versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  productItem?: Maybe<ProductItem>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ItemCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ItemDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ItemHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ItemProductItemArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ItemPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ItemScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ItemUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type ItemConnection = {
  __typename?: 'ItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ItemCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  productItem?: InputMaybe<ProductItemCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ItemCreateManyInlineInput = {
  /** Connect multiple existing Item documents */
  connect?: InputMaybe<Array<ItemWhereUniqueInput>>;
  /** Create and connect multiple existing Item documents */
  create?: InputMaybe<Array<ItemCreateInput>>;
};

export type ItemCreateOneInlineInput = {
  /** Connect one existing Item document */
  connect?: InputMaybe<ItemWhereUniqueInput>;
  /** Create and connect one Item document */
  create?: InputMaybe<ItemCreateInput>;
};

/** An edge in a connection. */
export type ItemEdge = {
  __typename?: 'ItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Item;
};

/** Identifies documents */
export type ItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  productItem?: InputMaybe<ProductItemWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ItemOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ItemUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  productItem?: InputMaybe<ProductItemUpdateOneInlineInput>;
};

export type ItemUpdateManyInlineInput = {
  /** Connect multiple existing Item documents */
  connect?: InputMaybe<Array<ItemConnectInput>>;
  /** Create and connect multiple Item documents */
  create?: InputMaybe<Array<ItemCreateInput>>;
  /** Delete multiple Item documents */
  delete?: InputMaybe<Array<ItemWhereUniqueInput>>;
  /** Disconnect multiple Item documents */
  disconnect?: InputMaybe<Array<ItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Item documents */
  set?: InputMaybe<Array<ItemWhereUniqueInput>>;
  /** Update multiple Item documents */
  update?: InputMaybe<Array<ItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Item documents */
  upsert?: InputMaybe<Array<ItemUpsertWithNestedWhereUniqueInput>>;
};

export type ItemUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type ItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ItemUpdateManyInput;
  /** Document search */
  where: ItemWhereInput;
};

export type ItemUpdateOneInlineInput = {
  /** Connect existing Item document */
  connect?: InputMaybe<ItemWhereUniqueInput>;
  /** Create and connect one Item document */
  create?: InputMaybe<ItemCreateInput>;
  /** Delete currently connected Item document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Item document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Item document */
  update?: InputMaybe<ItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Item document */
  upsert?: InputMaybe<ItemUpsertWithNestedWhereUniqueInput>;
};

export type ItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ItemUpdateInput;
  /** Unique document search */
  where: ItemWhereUniqueInput;
};

export type ItemUpsertInput = {
  /** Create document if it didn't exist */
  create: ItemCreateInput;
  /** Update document if it exists */
  update: ItemUpdateInput;
};

export type ItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ItemUpsertInput;
  /** Unique document search */
  where: ItemWhereUniqueInput;
};

/** Identifies documents */
export type ItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  productItem?: InputMaybe<ProductItemWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Item record uniquely */
export type ItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Locale system enumeration */
export enum Locale {
  De = 'de',
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one cart */
  createCart?: Maybe<Cart>;
  /** Create one cartProduct */
  createCartProduct?: Maybe<CartProduct>;
  /** Create one category */
  createCategory?: Maybe<Category>;
  /** Create one collection */
  createCollection?: Maybe<Collection>;
  /** Create one currency */
  createCurrency?: Maybe<Currency>;
  /** Create one item */
  createItem?: Maybe<Item>;
  /** Create one order */
  createOrder?: Maybe<Order>;
  /** Create one orderItem */
  createOrderItem?: Maybe<OrderItem>;
  /** Create one product */
  createProduct?: Maybe<Product>;
  /** Create one productItem */
  createProductItem?: Maybe<ProductItem>;
  /** Create one review */
  createReview?: Maybe<Review>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one cart from _all_ existing stages. Returns deleted document. */
  deleteCart?: Maybe<Cart>;
  /** Delete one cartProduct from _all_ existing stages. Returns deleted document. */
  deleteCartProduct?: Maybe<CartProduct>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>;
  /** Delete one collection from _all_ existing stages. Returns deleted document. */
  deleteCollection?: Maybe<Collection>;
  /** Delete one currency from _all_ existing stages. Returns deleted document. */
  deleteCurrency?: Maybe<Currency>;
  /** Delete one item from _all_ existing stages. Returns deleted document. */
  deleteItem?: Maybe<Item>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many CartProduct documents
   * @deprecated Please use the new paginated many mutation (deleteManyCartProductsConnection)
   */
  deleteManyCartProducts: BatchPayload;
  /** Delete many CartProduct documents, return deleted documents */
  deleteManyCartProductsConnection: CartProductConnection;
  /**
   * Delete many Cart documents
   * @deprecated Please use the new paginated many mutation (deleteManyCartsConnection)
   */
  deleteManyCarts: BatchPayload;
  /** Delete many Cart documents, return deleted documents */
  deleteManyCartsConnection: CartConnection;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection;
  /**
   * Delete many Collection documents
   * @deprecated Please use the new paginated many mutation (deleteManyCollectionsConnection)
   */
  deleteManyCollections: BatchPayload;
  /** Delete many Collection documents, return deleted documents */
  deleteManyCollectionsConnection: CollectionConnection;
  /**
   * Delete many Currency documents
   * @deprecated Please use the new paginated many mutation (deleteManyCurrenciesConnection)
   */
  deleteManyCurrencies: BatchPayload;
  /** Delete many Currency documents, return deleted documents */
  deleteManyCurrenciesConnection: CurrencyConnection;
  /**
   * Delete many Item documents
   * @deprecated Please use the new paginated many mutation (deleteManyItemsConnection)
   */
  deleteManyItems: BatchPayload;
  /** Delete many Item documents, return deleted documents */
  deleteManyItemsConnection: ItemConnection;
  /**
   * Delete many OrderItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrderItemsConnection)
   */
  deleteManyOrderItems: BatchPayload;
  /** Delete many OrderItem documents, return deleted documents */
  deleteManyOrderItemsConnection: OrderItemConnection;
  /**
   * Delete many Order documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrdersConnection)
   */
  deleteManyOrders: BatchPayload;
  /** Delete many Order documents, return deleted documents */
  deleteManyOrdersConnection: OrderConnection;
  /**
   * Delete many ProductItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductItemsConnection)
   */
  deleteManyProductItems: BatchPayload;
  /** Delete many ProductItem documents, return deleted documents */
  deleteManyProductItemsConnection: ProductItemConnection;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /**
   * Delete many Review documents
   * @deprecated Please use the new paginated many mutation (deleteManyReviewsConnection)
   */
  deleteManyReviews: BatchPayload;
  /** Delete many Review documents, return deleted documents */
  deleteManyReviewsConnection: ReviewConnection;
  /** Delete one order from _all_ existing stages. Returns deleted document. */
  deleteOrder?: Maybe<Order>;
  /** Delete one orderItem from _all_ existing stages. Returns deleted document. */
  deleteOrderItem?: Maybe<OrderItem>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct?: Maybe<Product>;
  /** Delete one productItem from _all_ existing stages. Returns deleted document. */
  deleteProductItem?: Maybe<ProductItem>;
  /** Delete one review from _all_ existing stages. Returns deleted document. */
  deleteReview?: Maybe<Review>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one cart */
  publishCart?: Maybe<Cart>;
  /** Publish one cartProduct */
  publishCartProduct?: Maybe<CartProduct>;
  /** Publish one category */
  publishCategory?: Maybe<Category>;
  /** Publish one collection */
  publishCollection?: Maybe<Collection>;
  /** Publish one currency */
  publishCurrency?: Maybe<Currency>;
  /** Publish one item */
  publishItem?: Maybe<Item>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many CartProduct documents
   * @deprecated Please use the new paginated many mutation (publishManyCartProductsConnection)
   */
  publishManyCartProducts: BatchPayload;
  /** Publish many CartProduct documents */
  publishManyCartProductsConnection: CartProductConnection;
  /**
   * Publish many Cart documents
   * @deprecated Please use the new paginated many mutation (publishManyCartsConnection)
   */
  publishManyCarts: BatchPayload;
  /** Publish many Cart documents */
  publishManyCartsConnection: CartConnection;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload;
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection;
  /**
   * Publish many Collection documents
   * @deprecated Please use the new paginated many mutation (publishManyCollectionsConnection)
   */
  publishManyCollections: BatchPayload;
  /** Publish many Collection documents */
  publishManyCollectionsConnection: CollectionConnection;
  /**
   * Publish many Currency documents
   * @deprecated Please use the new paginated many mutation (publishManyCurrenciesConnection)
   */
  publishManyCurrencies: BatchPayload;
  /** Publish many Currency documents */
  publishManyCurrenciesConnection: CurrencyConnection;
  /**
   * Publish many Item documents
   * @deprecated Please use the new paginated many mutation (publishManyItemsConnection)
   */
  publishManyItems: BatchPayload;
  /** Publish many Item documents */
  publishManyItemsConnection: ItemConnection;
  /**
   * Publish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (publishManyOrderItemsConnection)
   */
  publishManyOrderItems: BatchPayload;
  /** Publish many OrderItem documents */
  publishManyOrderItemsConnection: OrderItemConnection;
  /**
   * Publish many Order documents
   * @deprecated Please use the new paginated many mutation (publishManyOrdersConnection)
   */
  publishManyOrders: BatchPayload;
  /** Publish many Order documents */
  publishManyOrdersConnection: OrderConnection;
  /**
   * Publish many ProductItem documents
   * @deprecated Please use the new paginated many mutation (publishManyProductItemsConnection)
   */
  publishManyProductItems: BatchPayload;
  /** Publish many ProductItem documents */
  publishManyProductItemsConnection: ProductItemConnection;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /**
   * Publish many Review documents
   * @deprecated Please use the new paginated many mutation (publishManyReviewsConnection)
   */
  publishManyReviews: BatchPayload;
  /** Publish many Review documents */
  publishManyReviewsConnection: ReviewConnection;
  /** Publish one order */
  publishOrder?: Maybe<Order>;
  /** Publish one orderItem */
  publishOrderItem?: Maybe<OrderItem>;
  /** Publish one product */
  publishProduct?: Maybe<Product>;
  /** Publish one productItem */
  publishProductItem?: Maybe<ProductItem>;
  /** Publish one review */
  publishReview?: Maybe<Review>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one cart */
  schedulePublishCart?: Maybe<Cart>;
  /** Schedule to publish one cartProduct */
  schedulePublishCartProduct?: Maybe<CartProduct>;
  /** Schedule to publish one category */
  schedulePublishCategory?: Maybe<Category>;
  /** Schedule to publish one collection */
  schedulePublishCollection?: Maybe<Collection>;
  /** Schedule to publish one currency */
  schedulePublishCurrency?: Maybe<Currency>;
  /** Schedule to publish one item */
  schedulePublishItem?: Maybe<Item>;
  /** Schedule to publish one order */
  schedulePublishOrder?: Maybe<Order>;
  /** Schedule to publish one orderItem */
  schedulePublishOrderItem?: Maybe<OrderItem>;
  /** Schedule to publish one product */
  schedulePublishProduct?: Maybe<Product>;
  /** Schedule to publish one productItem */
  schedulePublishProductItem?: Maybe<ProductItem>;
  /** Schedule to publish one review */
  schedulePublishReview?: Maybe<Review>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one cart from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCart?: Maybe<Cart>;
  /** Unpublish one cartProduct from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCartProduct?: Maybe<CartProduct>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory?: Maybe<Category>;
  /** Unpublish one collection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCollection?: Maybe<Collection>;
  /** Unpublish one currency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCurrency?: Maybe<Currency>;
  /** Unpublish one item from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishItem?: Maybe<Item>;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishOrder?: Maybe<Order>;
  /** Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishOrderItem?: Maybe<OrderItem>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProduct?: Maybe<Product>;
  /** Unpublish one productItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProductItem?: Maybe<ProductItem>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishReview?: Maybe<Review>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one cart from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCart?: Maybe<Cart>;
  /** Unpublish one cartProduct from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCartProduct?: Maybe<CartProduct>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>;
  /** Unpublish one collection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCollection?: Maybe<Collection>;
  /** Unpublish one currency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCurrency?: Maybe<Currency>;
  /** Unpublish one item from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishItem?: Maybe<Item>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many CartProduct documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCartProductsConnection)
   */
  unpublishManyCartProducts: BatchPayload;
  /** Find many CartProduct documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCartProductsConnection: CartProductConnection;
  /**
   * Unpublish many Cart documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCartsConnection)
   */
  unpublishManyCarts: BatchPayload;
  /** Find many Cart documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCartsConnection: CartConnection;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Unpublish many Collection documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCollectionsConnection)
   */
  unpublishManyCollections: BatchPayload;
  /** Find many Collection documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCollectionsConnection: CollectionConnection;
  /**
   * Unpublish many Currency documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCurrenciesConnection)
   */
  unpublishManyCurrencies: BatchPayload;
  /** Find many Currency documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCurrenciesConnection: CurrencyConnection;
  /**
   * Unpublish many Item documents
   * @deprecated Please use the new paginated many mutation (unpublishManyItemsConnection)
   */
  unpublishManyItems: BatchPayload;
  /** Find many Item documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyItemsConnection: ItemConnection;
  /**
   * Unpublish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrderItemsConnection)
   */
  unpublishManyOrderItems: BatchPayload;
  /** Find many OrderItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrderItemsConnection: OrderItemConnection;
  /**
   * Unpublish many Order documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrdersConnection)
   */
  unpublishManyOrders: BatchPayload;
  /** Find many Order documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrdersConnection: OrderConnection;
  /**
   * Unpublish many ProductItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductItemsConnection)
   */
  unpublishManyProductItems: BatchPayload;
  /** Find many ProductItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductItemsConnection: ProductItemConnection;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /**
   * Unpublish many Review documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReviewsConnection)
   */
  unpublishManyReviews: BatchPayload;
  /** Find many Review documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReviewsConnection: ReviewConnection;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrder?: Maybe<Order>;
  /** Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrderItem?: Maybe<OrderItem>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct?: Maybe<Product>;
  /** Unpublish one productItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProductItem?: Maybe<ProductItem>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReview?: Maybe<Review>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one cart */
  updateCart?: Maybe<Cart>;
  /** Update one cartProduct */
  updateCartProduct?: Maybe<CartProduct>;
  /** Update one category */
  updateCategory?: Maybe<Category>;
  /** Update one collection */
  updateCollection?: Maybe<Collection>;
  /** Update one currency */
  updateCurrency?: Maybe<Currency>;
  /** Update one item */
  updateItem?: Maybe<Item>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many cartProducts
   * @deprecated Please use the new paginated many mutation (updateManyCartProductsConnection)
   */
  updateManyCartProducts: BatchPayload;
  /** Update many CartProduct documents */
  updateManyCartProductsConnection: CartProductConnection;
  /**
   * Update many carts
   * @deprecated Please use the new paginated many mutation (updateManyCartsConnection)
   */
  updateManyCarts: BatchPayload;
  /** Update many Cart documents */
  updateManyCartsConnection: CartConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload;
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection;
  /**
   * Update many collections
   * @deprecated Please use the new paginated many mutation (updateManyCollectionsConnection)
   */
  updateManyCollections: BatchPayload;
  /** Update many Collection documents */
  updateManyCollectionsConnection: CollectionConnection;
  /**
   * Update many currencies
   * @deprecated Please use the new paginated many mutation (updateManyCurrenciesConnection)
   */
  updateManyCurrencies: BatchPayload;
  /** Update many Currency documents */
  updateManyCurrenciesConnection: CurrencyConnection;
  /**
   * Update many items
   * @deprecated Please use the new paginated many mutation (updateManyItemsConnection)
   */
  updateManyItems: BatchPayload;
  /** Update many Item documents */
  updateManyItemsConnection: ItemConnection;
  /**
   * Update many orderItems
   * @deprecated Please use the new paginated many mutation (updateManyOrderItemsConnection)
   */
  updateManyOrderItems: BatchPayload;
  /** Update many OrderItem documents */
  updateManyOrderItemsConnection: OrderItemConnection;
  /**
   * Update many orders
   * @deprecated Please use the new paginated many mutation (updateManyOrdersConnection)
   */
  updateManyOrders: BatchPayload;
  /** Update many Order documents */
  updateManyOrdersConnection: OrderConnection;
  /**
   * Update many productItems
   * @deprecated Please use the new paginated many mutation (updateManyProductItemsConnection)
   */
  updateManyProductItems: BatchPayload;
  /** Update many ProductItem documents */
  updateManyProductItemsConnection: ProductItemConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /**
   * Update many reviews
   * @deprecated Please use the new paginated many mutation (updateManyReviewsConnection)
   */
  updateManyReviews: BatchPayload;
  /** Update many Review documents */
  updateManyReviewsConnection: ReviewConnection;
  /** Update one order */
  updateOrder?: Maybe<Order>;
  /** Update one orderItem */
  updateOrderItem?: Maybe<OrderItem>;
  /** Update one product */
  updateProduct?: Maybe<Product>;
  /** Update one productItem */
  updateProductItem?: Maybe<ProductItem>;
  /** Update one review */
  updateReview?: Maybe<Review>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one cart */
  upsertCart?: Maybe<Cart>;
  /** Upsert one cartProduct */
  upsertCartProduct?: Maybe<CartProduct>;
  /** Upsert one category */
  upsertCategory?: Maybe<Category>;
  /** Upsert one collection */
  upsertCollection?: Maybe<Collection>;
  /** Upsert one currency */
  upsertCurrency?: Maybe<Currency>;
  /** Upsert one item */
  upsertItem?: Maybe<Item>;
  /** Upsert one order */
  upsertOrder?: Maybe<Order>;
  /** Upsert one orderItem */
  upsertOrderItem?: Maybe<OrderItem>;
  /** Upsert one product */
  upsertProduct?: Maybe<Product>;
  /** Upsert one productItem */
  upsertProductItem?: Maybe<ProductItem>;
  /** Upsert one review */
  upsertReview?: Maybe<Review>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateCartArgs = {
  data: CartCreateInput;
};


export type MutationCreateCartProductArgs = {
  data: CartProductCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateCollectionArgs = {
  data: CollectionCreateInput;
};


export type MutationCreateCurrencyArgs = {
  data: CurrencyCreateInput;
};


export type MutationCreateItemArgs = {
  data: ItemCreateInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};


export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateProductItemArgs = {
  data: ProductItemCreateInput;
};


export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteCartArgs = {
  where: CartWhereUniqueInput;
};


export type MutationDeleteCartProductArgs = {
  where: CartProductWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteCollectionArgs = {
  where: CollectionWhereUniqueInput;
};


export type MutationDeleteCurrencyArgs = {
  where: CurrencyWhereUniqueInput;
};


export type MutationDeleteItemArgs = {
  where: ItemWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyCartProductsArgs = {
  where?: InputMaybe<CartProductManyWhereInput>;
};


export type MutationDeleteManyCartProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CartProductManyWhereInput>;
};


export type MutationDeleteManyCartsArgs = {
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationDeleteManyCartsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationDeleteManyCategoriesArgs = {
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationDeleteManyCollectionsArgs = {
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationDeleteManyCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationDeleteManyCurrenciesArgs = {
  where?: InputMaybe<CurrencyManyWhereInput>;
};


export type MutationDeleteManyCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};


export type MutationDeleteManyItemsArgs = {
  where?: InputMaybe<ItemManyWhereInput>;
};


export type MutationDeleteManyItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ItemManyWhereInput>;
};


export type MutationDeleteManyOrderItemsArgs = {
  where?: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationDeleteManyOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationDeleteManyOrdersArgs = {
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationDeleteManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationDeleteManyProductItemsArgs = {
  where?: InputMaybe<ProductItemManyWhereInput>;
};


export type MutationDeleteManyProductItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductItemManyWhereInput>;
};


export type MutationDeleteManyProductsArgs = {
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationDeleteManyReviewsArgs = {
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationDeleteManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeleteOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteProductItemArgs = {
  where: ProductItemWhereUniqueInput;
};


export type MutationDeleteReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCartArgs = {
  to?: Array<Stage>;
  where: CartWhereUniqueInput;
};


export type MutationPublishCartProductArgs = {
  to?: Array<Stage>;
  where: CartProductWhereUniqueInput;
};


export type MutationPublishCategoryArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCollectionArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: CollectionWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCurrencyArgs = {
  to?: Array<Stage>;
  where: CurrencyWhereUniqueInput;
};


export type MutationPublishItemArgs = {
  to?: Array<Stage>;
  where: ItemWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCartProductsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CartProductManyWhereInput>;
};


export type MutationPublishManyCartProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CartProductManyWhereInput>;
};


export type MutationPublishManyCartsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationPublishManyCartsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationPublishManyCategoriesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCollectionsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<CollectionManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CollectionManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCurrenciesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};


export type MutationPublishManyCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};


export type MutationPublishManyItemsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ItemManyWhereInput>;
};


export type MutationPublishManyItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ItemManyWhereInput>;
};


export type MutationPublishManyOrderItemsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationPublishManyOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationPublishManyOrdersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationPublishManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationPublishManyProductItemsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProductItemManyWhereInput>;
};


export type MutationPublishManyProductItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductItemManyWhereInput>;
};


export type MutationPublishManyProductsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyReviewsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationPublishManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationPublishOrderArgs = {
  to?: Array<Stage>;
  where: OrderWhereUniqueInput;
};


export type MutationPublishOrderItemArgs = {
  to?: Array<Stage>;
  where: OrderItemWhereUniqueInput;
};


export type MutationPublishProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishProductItemArgs = {
  to?: Array<Stage>;
  where: ProductItemWhereUniqueInput;
};


export type MutationPublishReviewArgs = {
  to?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCartArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CartWhereUniqueInput;
};


export type MutationSchedulePublishCartProductArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CartProductWhereUniqueInput;
};


export type MutationSchedulePublishCategoryArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCollectionArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CollectionWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCurrencyArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CurrencyWhereUniqueInput;
};


export type MutationSchedulePublishItemArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ItemWhereUniqueInput;
};


export type MutationSchedulePublishOrderArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: OrderWhereUniqueInput;
};


export type MutationSchedulePublishOrderItemArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: OrderItemWhereUniqueInput;
};


export type MutationSchedulePublishProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishProductItemArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProductItemWhereUniqueInput;
};


export type MutationSchedulePublishReviewArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishCartArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CartWhereUniqueInput;
};


export type MutationScheduleUnpublishCartProductArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CartProductWhereUniqueInput;
};


export type MutationScheduleUnpublishCategoryArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: CategoryWhereUniqueInput;
};


export type MutationScheduleUnpublishCollectionArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: CollectionWhereUniqueInput;
};


export type MutationScheduleUnpublishCurrencyArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CurrencyWhereUniqueInput;
};


export type MutationScheduleUnpublishItemArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ItemWhereUniqueInput;
};


export type MutationScheduleUnpublishOrderArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: OrderWhereUniqueInput;
};


export type MutationScheduleUnpublishOrderItemArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: OrderItemWhereUniqueInput;
};


export type MutationScheduleUnpublishProductArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ProductWhereUniqueInput;
};


export type MutationScheduleUnpublishProductItemArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ProductItemWhereUniqueInput;
};


export type MutationScheduleUnpublishReviewArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ReviewWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishCartArgs = {
  from?: Array<Stage>;
  where: CartWhereUniqueInput;
};


export type MutationUnpublishCartProductArgs = {
  from?: Array<Stage>;
  where: CartProductWhereUniqueInput;
};


export type MutationUnpublishCategoryArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: CategoryWhereUniqueInput;
};


export type MutationUnpublishCollectionArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: CollectionWhereUniqueInput;
};


export type MutationUnpublishCurrencyArgs = {
  from?: Array<Stage>;
  where: CurrencyWhereUniqueInput;
};


export type MutationUnpublishItemArgs = {
  from?: Array<Stage>;
  where: ItemWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyCartProductsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CartProductManyWhereInput>;
};


export type MutationUnpublishManyCartProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CartProductManyWhereInput>;
};


export type MutationUnpublishManyCartsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationUnpublishManyCartsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationUnpublishManyCategoriesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUnpublishManyCollectionsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationUnpublishManyCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationUnpublishManyCurrenciesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};


export type MutationUnpublishManyCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};


export type MutationUnpublishManyItemsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ItemManyWhereInput>;
};


export type MutationUnpublishManyItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ItemManyWhereInput>;
};


export type MutationUnpublishManyOrderItemsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationUnpublishManyOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationUnpublishManyOrdersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationUnpublishManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationUnpublishManyProductItemsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProductItemManyWhereInput>;
};


export type MutationUnpublishManyProductItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProductItemManyWhereInput>;
};


export type MutationUnpublishManyProductsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUnpublishManyReviewsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUnpublishManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUnpublishOrderArgs = {
  from?: Array<Stage>;
  where: OrderWhereUniqueInput;
};


export type MutationUnpublishOrderItemArgs = {
  from?: Array<Stage>;
  where: OrderItemWhereUniqueInput;
};


export type MutationUnpublishProductArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ProductWhereUniqueInput;
};


export type MutationUnpublishProductItemArgs = {
  from?: Array<Stage>;
  where: ProductItemWhereUniqueInput;
};


export type MutationUnpublishReviewArgs = {
  from?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateCartArgs = {
  data: CartUpdateInput;
  where: CartWhereUniqueInput;
};


export type MutationUpdateCartProductArgs = {
  data: CartProductUpdateInput;
  where: CartProductWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateCollectionArgs = {
  data: CollectionUpdateInput;
  where: CollectionWhereUniqueInput;
};


export type MutationUpdateCurrencyArgs = {
  data: CurrencyUpdateInput;
  where: CurrencyWhereUniqueInput;
};


export type MutationUpdateItemArgs = {
  data: ItemUpdateInput;
  where: ItemWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyCartProductsArgs = {
  data: CartProductUpdateManyInput;
  where?: InputMaybe<CartProductManyWhereInput>;
};


export type MutationUpdateManyCartProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CartProductUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CartProductManyWhereInput>;
};


export type MutationUpdateManyCartsArgs = {
  data: CartUpdateManyInput;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationUpdateManyCartsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CartUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CartManyWhereInput>;
};


export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CategoryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryManyWhereInput>;
};


export type MutationUpdateManyCollectionsArgs = {
  data: CollectionUpdateManyInput;
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationUpdateManyCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CollectionUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionManyWhereInput>;
};


export type MutationUpdateManyCurrenciesArgs = {
  data: CurrencyUpdateManyInput;
  where?: InputMaybe<CurrencyManyWhereInput>;
};


export type MutationUpdateManyCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CurrencyUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};


export type MutationUpdateManyItemsArgs = {
  data: ItemUpdateManyInput;
  where?: InputMaybe<ItemManyWhereInput>;
};


export type MutationUpdateManyItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ItemUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ItemManyWhereInput>;
};


export type MutationUpdateManyOrderItemsArgs = {
  data: OrderItemUpdateManyInput;
  where?: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationUpdateManyOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: OrderItemUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};


export type MutationUpdateManyOrdersArgs = {
  data: OrderUpdateManyInput;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationUpdateManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: OrderUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderManyWhereInput>;
};


export type MutationUpdateManyProductItemsArgs = {
  data: ProductItemUpdateManyInput;
  where?: InputMaybe<ProductItemManyWhereInput>;
};


export type MutationUpdateManyProductItemsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ProductItemUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductItemManyWhereInput>;
};


export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyInput;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ProductUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductManyWhereInput>;
};


export type MutationUpdateManyReviewsArgs = {
  data: ReviewUpdateManyInput;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUpdateManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ReviewUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewManyWhereInput>;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOrderItemArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateProductItemArgs = {
  data: ProductItemUpdateInput;
  where: ProductItemWhereUniqueInput;
};


export type MutationUpdateReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertCartArgs = {
  upsert: CartUpsertInput;
  where: CartWhereUniqueInput;
};


export type MutationUpsertCartProductArgs = {
  upsert: CartProductUpsertInput;
  where: CartProductWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertCollectionArgs = {
  upsert: CollectionUpsertInput;
  where: CollectionWhereUniqueInput;
};


export type MutationUpsertCurrencyArgs = {
  upsert: CurrencyUpsertInput;
  where: CurrencyWhereUniqueInput;
};


export type MutationUpsertItemArgs = {
  upsert: ItemUpsertInput;
  where: ItemWhereUniqueInput;
};


export type MutationUpsertOrderArgs = {
  upsert: OrderUpsertInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpsertOrderItemArgs = {
  upsert: OrderItemUpsertInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpsertProductArgs = {
  upsert: ProductUpsertInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertProductItemArgs = {
  upsert: ProductItemUpsertInput;
  where: ProductItemWhereUniqueInput;
};


export type MutationUpsertReviewArgs = {
  upsert: ReviewUpsertInput;
  where: ReviewWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Order = Node & {
  __typename?: 'Order';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Order>;
  email: Scalars['String'];
  /** List of Order versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  orderItems: Array<OrderItem>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  stripeCheckoutId: Scalars['String'];
  total: Scalars['Int'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type OrderCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type OrderDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type OrderHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type OrderOrderItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<OrderItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type OrderPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type OrderScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type OrderUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OrderWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  orderItems?: InputMaybe<OrderItemCreateManyInlineInput>;
  stripeCheckoutId: Scalars['String'];
  total: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderCreateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Create and connect multiple existing Order documents */
  create?: InputMaybe<Array<OrderCreateInput>>;
};

export type OrderCreateOneInlineInput = {
  /** Connect one existing Order document */
  connect?: InputMaybe<OrderWhereUniqueInput>;
  /** Create and connect one Order document */
  create?: InputMaybe<OrderCreateInput>;
};

/** An edge in a connection. */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Order;
};

export type OrderItem = Node & {
  __typename?: 'OrderItem';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<OrderItem>;
  /** List of OrderItem versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quantity: Scalars['Int'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  total: Scalars['Int'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type OrderItemCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type OrderItemDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type OrderItemHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type OrderItemOrderArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type OrderItemProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type OrderItemPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type OrderItemScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type OrderItemUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OrderItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrderItemConnection = {
  __typename?: 'OrderItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OrderItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderItemCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  order?: InputMaybe<OrderCreateOneInlineInput>;
  product?: InputMaybe<ProductCreateOneInlineInput>;
  quantity: Scalars['Int'];
  total: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrderItemCreateManyInlineInput = {
  /** Connect multiple existing OrderItem documents */
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Create and connect multiple existing OrderItem documents */
  create?: InputMaybe<Array<OrderItemCreateInput>>;
};

export type OrderItemCreateOneInlineInput = {
  /** Connect one existing OrderItem document */
  connect?: InputMaybe<OrderItemWhereUniqueInput>;
  /** Create and connect one OrderItem document */
  create?: InputMaybe<OrderItemCreateInput>;
};

/** An edge in a connection. */
export type OrderItemEdge = {
  __typename?: 'OrderItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: OrderItem;
};

/** Identifies documents */
export type OrderItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<OrderWhereInput>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantity_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  total?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum OrderItemOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type OrderItemUpdateInput = {
  order?: InputMaybe<OrderUpdateOneInlineInput>;
  product?: InputMaybe<ProductUpdateOneInlineInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Scalars['Int']>;
};

export type OrderItemUpdateManyInlineInput = {
  /** Connect multiple existing OrderItem documents */
  connect?: InputMaybe<Array<OrderItemConnectInput>>;
  /** Create and connect multiple OrderItem documents */
  create?: InputMaybe<Array<OrderItemCreateInput>>;
  /** Delete multiple OrderItem documents */
  delete?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Disconnect multiple OrderItem documents */
  disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing OrderItem documents */
  set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Update multiple OrderItem documents */
  update?: InputMaybe<Array<OrderItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple OrderItem documents */
  upsert?: InputMaybe<Array<OrderItemUpsertWithNestedWhereUniqueInput>>;
};

export type OrderItemUpdateManyInput = {
  quantity?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Scalars['Int']>;
};

export type OrderItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OrderItemUpdateManyInput;
  /** Document search */
  where: OrderItemWhereInput;
};

export type OrderItemUpdateOneInlineInput = {
  /** Connect existing OrderItem document */
  connect?: InputMaybe<OrderItemWhereUniqueInput>;
  /** Create and connect one OrderItem document */
  create?: InputMaybe<OrderItemCreateInput>;
  /** Delete currently connected OrderItem document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected OrderItem document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single OrderItem document */
  update?: InputMaybe<OrderItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single OrderItem document */
  upsert?: InputMaybe<OrderItemUpsertWithNestedWhereUniqueInput>;
};

export type OrderItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OrderItemUpdateInput;
  /** Unique document search */
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderItemCreateInput;
  /** Update document if it exists */
  update: OrderItemUpdateInput;
};

export type OrderItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OrderItemUpsertInput;
  /** Unique document search */
  where: OrderItemWhereUniqueInput;
};

/** Identifies documents */
export type OrderItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<OrderWhereInput>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantity_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  total?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References OrderItem record uniquely */
export type OrderItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Identifies documents */
export type OrderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  orderItems_every?: InputMaybe<OrderItemWhereInput>;
  orderItems_none?: InputMaybe<OrderItemWhereInput>;
  orderItems_some?: InputMaybe<OrderItemWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  stripeCheckoutId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  stripeCheckoutId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  stripeCheckoutId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stripeCheckoutId_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  stripeCheckoutId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  stripeCheckoutId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  stripeCheckoutId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  stripeCheckoutId_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  stripeCheckoutId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  stripeCheckoutId_starts_with?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum OrderOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StripeCheckoutIdAsc = 'stripeCheckoutId_ASC',
  StripeCheckoutIdDesc = 'stripeCheckoutId_DESC',
  TotalAsc = 'total_ASC',
  TotalDesc = 'total_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type OrderUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  orderItems?: InputMaybe<OrderItemUpdateManyInlineInput>;
  stripeCheckoutId?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Int']>;
};

export type OrderUpdateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect?: InputMaybe<Array<OrderConnectInput>>;
  /** Create and connect multiple Order documents */
  create?: InputMaybe<Array<OrderCreateInput>>;
  /** Delete multiple Order documents */
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Disconnect multiple Order documents */
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Order documents */
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Update multiple Order documents */
  update?: InputMaybe<Array<OrderUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Order documents */
  upsert?: InputMaybe<Array<OrderUpsertWithNestedWhereUniqueInput>>;
};

export type OrderUpdateManyInput = {
  email?: InputMaybe<Scalars['String']>;
  stripeCheckoutId?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Int']>;
};

export type OrderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OrderUpdateManyInput;
  /** Document search */
  where: OrderWhereInput;
};

export type OrderUpdateOneInlineInput = {
  /** Connect existing Order document */
  connect?: InputMaybe<OrderWhereUniqueInput>;
  /** Create and connect one Order document */
  create?: InputMaybe<OrderCreateInput>;
  /** Delete currently connected Order document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Order document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Order document */
  update?: InputMaybe<OrderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Order document */
  upsert?: InputMaybe<OrderUpsertWithNestedWhereUniqueInput>;
};

export type OrderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OrderUpdateInput;
  /** Unique document search */
  where: OrderWhereUniqueInput;
};

export type OrderUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderCreateInput;
  /** Update document if it exists */
  update: OrderUpdateInput;
};

export type OrderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OrderUpsertInput;
  /** Unique document search */
  where: OrderWhereUniqueInput;
};

/** Identifies documents */
export type OrderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  orderItems_every?: InputMaybe<OrderItemWhereInput>;
  orderItems_none?: InputMaybe<OrderItemWhereInput>;
  orderItems_some?: InputMaybe<OrderItemWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  stripeCheckoutId?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  stripeCheckoutId_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  stripeCheckoutId_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  stripeCheckoutId_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  stripeCheckoutId_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  stripeCheckoutId_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  stripeCheckoutId_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  stripeCheckoutId_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  stripeCheckoutId_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  stripeCheckoutId_starts_with?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  total_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Order record uniquely */
export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Product = Node & {
  __typename?: 'Product';
  cartProduct?: Maybe<CartProduct>;
  categories: Array<Category>;
  cents: Scalars['Int'];
  collections: Array<Collection>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars['String'];
  description_long: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  /** List of Product versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image: Asset;
  images: Array<Asset>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Product>;
  name: Scalars['String'];
  orderItems: Array<OrderItem>;
  productItems: Array<ProductItem>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  reviews: Array<Review>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ProductCartProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type ProductCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CollectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type ProductCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProductHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProductImageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type ProductLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type ProductOrderItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<OrderItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type ProductProductItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductItemWhereInput>;
};


export type ProductPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type ProductScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProductUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ProductUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCreateInput = {
  cartProduct?: InputMaybe<CartProductCreateOneInlineInput>;
  categories?: InputMaybe<CategoryCreateManyInlineInput>;
  /** cents input for default locale (en) */
  cents: Scalars['Int'];
  collections?: InputMaybe<CollectionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** description input for default locale (en) */
  description: Scalars['String'];
  description_long: Scalars['String'];
  image: AssetCreateOneInlineInput;
  images?: InputMaybe<AssetCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductCreateLocalizationsInput>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  orderItems?: InputMaybe<OrderItemCreateManyInlineInput>;
  productItems?: InputMaybe<ProductItemCreateManyInlineInput>;
  reviews?: InputMaybe<ReviewCreateManyInlineInput>;
  /** slug input for default locale (en) */
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductCreateLocalizationDataInput = {
  cents: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductCreateLocalizationInput = {
  /** Localization input */
  data: ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
};

export type ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
};

export type ProductItem = Node & {
  __typename?: 'ProductItem';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ProductItem>;
  /** List of ProductItem versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  item?: Maybe<Item>;
  product?: Maybe<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quantity: Scalars['Int'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ProductItemCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductItemDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ProductItemHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ProductItemItemArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductItemProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductItemPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ProductItemScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ProductItemUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductItemConnection = {
  __typename?: 'ProductItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductItemCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  item?: InputMaybe<ItemCreateOneInlineInput>;
  product?: InputMaybe<ProductCreateOneInlineInput>;
  quantity: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ProductItemCreateManyInlineInput = {
  /** Connect multiple existing ProductItem documents */
  connect?: InputMaybe<Array<ProductItemWhereUniqueInput>>;
  /** Create and connect multiple existing ProductItem documents */
  create?: InputMaybe<Array<ProductItemCreateInput>>;
};

export type ProductItemCreateOneInlineInput = {
  /** Connect one existing ProductItem document */
  connect?: InputMaybe<ProductItemWhereUniqueInput>;
  /** Create and connect one ProductItem document */
  create?: InputMaybe<ProductItemCreateInput>;
};

/** An edge in a connection. */
export type ProductItemEdge = {
  __typename?: 'ProductItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductItem;
};

/** Identifies documents */
export type ProductItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  item?: InputMaybe<ItemWhereInput>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantity_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProductItemOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProductItemUpdateInput = {
  item?: InputMaybe<ItemUpdateOneInlineInput>;
  product?: InputMaybe<ProductUpdateOneInlineInput>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ProductItemUpdateManyInlineInput = {
  /** Connect multiple existing ProductItem documents */
  connect?: InputMaybe<Array<ProductItemConnectInput>>;
  /** Create and connect multiple ProductItem documents */
  create?: InputMaybe<Array<ProductItemCreateInput>>;
  /** Delete multiple ProductItem documents */
  delete?: InputMaybe<Array<ProductItemWhereUniqueInput>>;
  /** Disconnect multiple ProductItem documents */
  disconnect?: InputMaybe<Array<ProductItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductItem documents */
  set?: InputMaybe<Array<ProductItemWhereUniqueInput>>;
  /** Update multiple ProductItem documents */
  update?: InputMaybe<Array<ProductItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductItem documents */
  upsert?: InputMaybe<Array<ProductItemUpsertWithNestedWhereUniqueInput>>;
};

export type ProductItemUpdateManyInput = {
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ProductItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductItemUpdateManyInput;
  /** Document search */
  where: ProductItemWhereInput;
};

export type ProductItemUpdateOneInlineInput = {
  /** Connect existing ProductItem document */
  connect?: InputMaybe<ProductItemWhereUniqueInput>;
  /** Create and connect one ProductItem document */
  create?: InputMaybe<ProductItemCreateInput>;
  /** Delete currently connected ProductItem document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ProductItem document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ProductItem document */
  update?: InputMaybe<ProductItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductItem document */
  upsert?: InputMaybe<ProductItemUpsertWithNestedWhereUniqueInput>;
};

export type ProductItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductItemUpdateInput;
  /** Unique document search */
  where: ProductItemWhereUniqueInput;
};

export type ProductItemUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductItemCreateInput;
  /** Update document if it exists */
  update: ProductItemUpdateInput;
};

export type ProductItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductItemUpsertInput;
  /** Unique document search */
  where: ProductItemWhereUniqueInput;
};

/** Identifies documents */
export type ProductItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  item?: InputMaybe<ItemWhereInput>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  quantity_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ProductItem record uniquely */
export type ProductItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  cartProduct?: InputMaybe<CartProductWhereInput>;
  categories_every?: InputMaybe<CategoryWhereInput>;
  categories_none?: InputMaybe<CategoryWhereInput>;
  categories_some?: InputMaybe<CategoryWhereInput>;
  collections_every?: InputMaybe<CollectionWhereInput>;
  collections_none?: InputMaybe<CollectionWhereInput>;
  collections_some?: InputMaybe<CollectionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description_long?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_long_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_long_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_long_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_long_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_long_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_long_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_long_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_long_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_long_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  orderItems_every?: InputMaybe<OrderItemWhereInput>;
  orderItems_none?: InputMaybe<OrderItemWhereInput>;
  orderItems_some?: InputMaybe<OrderItemWhereInput>;
  productItems_every?: InputMaybe<ProductItemWhereInput>;
  productItems_none?: InputMaybe<ProductItemWhereInput>;
  productItems_some?: InputMaybe<ProductItemWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  reviews_every?: InputMaybe<ReviewWhereInput>;
  reviews_none?: InputMaybe<ReviewWhereInput>;
  reviews_some?: InputMaybe<ReviewWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ProductOrderByInput {
  CentsAsc = 'cents_ASC',
  CentsDesc = 'cents_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DescriptionLongAsc = 'description_long_ASC',
  DescriptionLongDesc = 'description_long_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ProductUpdateInput = {
  cartProduct?: InputMaybe<CartProductUpdateOneInlineInput>;
  categories?: InputMaybe<CategoryUpdateManyInlineInput>;
  /** cents input for default locale (en) */
  cents?: InputMaybe<Scalars['Int']>;
  collections?: InputMaybe<CollectionUpdateManyInlineInput>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  description_long?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  images?: InputMaybe<AssetUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<ProductUpdateLocalizationsInput>;
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']>;
  orderItems?: InputMaybe<OrderItemUpdateManyInlineInput>;
  productItems?: InputMaybe<ProductItemUpdateManyInlineInput>;
  reviews?: InputMaybe<ReviewUpdateManyInlineInput>;
  /** slug input for default locale (en) */
  slug?: InputMaybe<Scalars['String']>;
};

export type ProductUpdateLocalizationDataInput = {
  cents?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type ProductUpdateLocalizationInput = {
  data: ProductUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ProductUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ProductUpsertLocalizationInput>>;
};

export type ProductUpdateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  /** cents input for default locale (en) */
  cents?: InputMaybe<Scalars['Int']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['String']>;
  description_long?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductUpdateManyLocalizationsInput>;
};

export type ProductUpdateManyLocalizationDataInput = {
  cents?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
};

export type ProductUpdateManyLocalizationInput = {
  data: ProductUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductUpdateManyLocalizationInput>>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
  /** Connect existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Product document */
  update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertLocalizationInput = {
  create: ProductCreateLocalizationDataInput;
  locale: Locale;
  update: ProductUpdateLocalizationDataInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  cartProduct?: InputMaybe<CartProductWhereInput>;
  categories_every?: InputMaybe<CategoryWhereInput>;
  categories_none?: InputMaybe<CategoryWhereInput>;
  categories_some?: InputMaybe<CategoryWhereInput>;
  cents?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  cents_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  cents_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  cents_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  cents_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  cents_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  cents_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  cents_not_in?: InputMaybe<Array<Scalars['Int']>>;
  collections_every?: InputMaybe<CollectionWhereInput>;
  collections_none?: InputMaybe<CollectionWhereInput>;
  collections_some?: InputMaybe<CollectionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_long?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_long_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_long_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_long_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_long_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_long_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_long_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_long_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_long_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_long_starts_with?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  orderItems_every?: InputMaybe<OrderItemWhereInput>;
  orderItems_none?: InputMaybe<OrderItemWhereInput>;
  orderItems_some?: InputMaybe<OrderItemWhereInput>;
  productItems_every?: InputMaybe<ProductItemWhereInput>;
  productItems_none?: InputMaybe<ProductItemWhereInput>;
  productItems_some?: InputMaybe<ProductItemWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  reviews_every?: InputMaybe<ReviewWhereInput>;
  reviews_none?: InputMaybe<ReviewWhereInput>;
  reviews_some?: InputMaybe<ReviewWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single cart */
  cart?: Maybe<Cart>;
  /** Retrieve a single cartProduct */
  cartProduct?: Maybe<CartProduct>;
  /** Retrieve document version */
  cartProductVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple cartProducts */
  cartProducts: Array<CartProduct>;
  /** Retrieve multiple cartProducts using the Relay connection interface */
  cartProductsConnection: CartProductConnection;
  /** Retrieve document version */
  cartVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple carts */
  carts: Array<Cart>;
  /** Retrieve multiple carts using the Relay connection interface */
  cartsConnection: CartConnection;
  /** Retrieve multiple categories */
  categories: Array<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection;
  /** Retrieve a single category */
  category?: Maybe<Category>;
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single collection */
  collection?: Maybe<Collection>;
  /** Retrieve document version */
  collectionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple collections */
  collections: Array<Collection>;
  /** Retrieve multiple collections using the Relay connection interface */
  collectionsConnection: CollectionConnection;
  /** Retrieve multiple currencies */
  currencies: Array<Currency>;
  /** Retrieve multiple currencies using the Relay connection interface */
  currenciesConnection: CurrencyConnection;
  /** Retrieve a single currency */
  currency?: Maybe<Currency>;
  /** Retrieve document version */
  currencyVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single item */
  item?: Maybe<Item>;
  /** Retrieve document version */
  itemVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple items */
  items: Array<Item>;
  /** Retrieve multiple items using the Relay connection interface */
  itemsConnection: ItemConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single order */
  order?: Maybe<Order>;
  /** Retrieve a single orderItem */
  orderItem?: Maybe<OrderItem>;
  /** Retrieve document version */
  orderItemVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple orderItems */
  orderItems: Array<OrderItem>;
  /** Retrieve multiple orderItems using the Relay connection interface */
  orderItemsConnection: OrderItemConnection;
  /** Retrieve document version */
  orderVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple orders */
  orders: Array<Order>;
  /** Retrieve multiple orders using the Relay connection interface */
  ordersConnection: OrderConnection;
  /** Retrieve a single product */
  product?: Maybe<Product>;
  /** Retrieve a single productItem */
  productItem?: Maybe<ProductItem>;
  /** Retrieve document version */
  productItemVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple productItems */
  productItems: Array<ProductItem>;
  /** Retrieve multiple productItems using the Relay connection interface */
  productItemsConnection: ProductItemConnection;
  /** Retrieve document version */
  productVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve a single review */
  review?: Maybe<Review>;
  /** Retrieve document version */
  reviewVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple reviews */
  reviews: Array<Review>;
  /** Retrieve multiple reviews using the Relay connection interface */
  reviewsConnection: ReviewConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryCartArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CartWhereUniqueInput;
};


export type QueryCartProductArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CartProductWhereUniqueInput;
};


export type QueryCartProductVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCartProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CartProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CartProductWhereInput>;
};


export type QueryCartProductsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CartProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CartProductWhereInput>;
};


export type QueryCartVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCartsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CartOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CartWhereInput>;
};


export type QueryCartsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CartOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CartWhereInput>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CategoryWhereUniqueInput;
};


export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCollectionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CollectionWhereUniqueInput;
};


export type QueryCollectionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CollectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CollectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryCurrenciesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CurrencyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CurrencyWhereInput>;
};


export type QueryCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CurrencyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CurrencyWhereInput>;
};


export type QueryCurrencyArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CurrencyWhereUniqueInput;
};


export type QueryCurrencyVersionArgs = {
  where: VersionWhereInput;
};


export type QueryItemArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ItemWhereUniqueInput;
};


export type QueryItemVersionArgs = {
  where: VersionWhereInput;
};


export type QueryItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ItemWhereInput>;
};


export type QueryItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ItemWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryOrderArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: OrderWhereUniqueInput;
};


export type QueryOrderItemArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: OrderItemWhereUniqueInput;
};


export type QueryOrderItemVersionArgs = {
  where: VersionWhereInput;
};


export type QueryOrderItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type QueryOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type QueryOrderVersionArgs = {
  where: VersionWhereInput;
};


export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryOrdersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryProductArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductWhereUniqueInput;
};


export type QueryProductItemArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductItemWhereUniqueInput;
};


export type QueryProductItemVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductItemWhereInput>;
};


export type QueryProductItemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductItemWhereInput>;
};


export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProductsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryReviewArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ReviewWhereUniqueInput;
};


export type QueryReviewVersionArgs = {
  where: VersionWhereInput;
};


export type QueryReviewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryReviewsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

export type Review = Node & {
  __typename?: 'Review';
  content: Scalars['String'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Review>;
  email: Scalars['String'];
  headline: Scalars['String'];
  /** List of Review versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  product?: Maybe<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rating?: Maybe<Scalars['Int']>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ReviewCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ReviewDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ReviewHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ReviewProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ReviewPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ReviewScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ReviewUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ReviewConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ReviewWhereUniqueInput;
};

/** A connection to a list of items. */
export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ReviewEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ReviewCreateInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  headline: Scalars['String'];
  name: Scalars['String'];
  product?: InputMaybe<ProductCreateOneInlineInput>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ReviewCreateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Create and connect multiple existing Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>;
};

export type ReviewCreateOneInlineInput = {
  /** Connect one existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>;
};

/** An edge in a connection. */
export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Review;
};

/** Identifies documents */
export type ReviewManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  headline_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rating?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  rating_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ReviewOrderByInput {
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ReviewUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductUpdateOneInlineInput>;
  rating?: InputMaybe<Scalars['Int']>;
};

export type ReviewUpdateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewConnectInput>>;
  /** Create and connect multiple Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>;
  /** Delete multiple Review documents */
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Disconnect multiple Review documents */
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Review documents */
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Update multiple Review documents */
  update?: InputMaybe<Array<ReviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Review documents */
  upsert?: InputMaybe<Array<ReviewUpsertWithNestedWhereUniqueInput>>;
};

export type ReviewUpdateManyInput = {
  content?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
};

export type ReviewUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ReviewUpdateManyInput;
  /** Document search */
  where: ReviewWhereInput;
};

export type ReviewUpdateOneInlineInput = {
  /** Connect existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>;
  /** Delete currently connected Review document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Review document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Review document */
  update?: InputMaybe<ReviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Review document */
  upsert?: InputMaybe<ReviewUpsertWithNestedWhereUniqueInput>;
};

export type ReviewUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ReviewUpdateInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertInput = {
  /** Create document if it didn't exist */
  create: ReviewCreateInput;
  /** Update document if it exists */
  update: ReviewUpdateInput;
};

export type ReviewUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ReviewUpsertInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

/** Identifies documents */
export type ReviewWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  content_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  headline_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  headline_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  headline_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  headline_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  headline_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  headline_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  headline_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  headline_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  headline_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  rating?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  rating_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<Scalars['Int']>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Review record uniquely */
export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Cart | CartProduct | Category | Collection | Currency | Item | Order | OrderItem | Product | ProductItem | Review;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, slug: string, image: { __typename?: 'Asset', id: string, url: string } }> };

export type GetProductsByCategoryIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductsByCategoryIdQuery = { __typename?: 'Query', category?: { __typename?: 'Category', products: Array<{ __typename?: 'Product', id: string, name: string, cents: number, description: string, image: { __typename?: 'Asset', id: string, url: string } }> } | null };

export type ProductItemsByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductItemsByIdQuery = { __typename?: 'Query', product?: { __typename?: 'Product', name: string, description: string, description_long: string, id: string, slug: string, cents: number, image: { __typename?: 'Asset', id: string, url: string }, productItems: Array<{ __typename?: 'ProductItem', quantity: number, item?: { __typename?: 'Item', name: string } | null }> } | null };

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', description: string, cents: number, id: string, name: string, slug: string, image: { __typename?: 'Asset', id: string, url: string } }> };


export const CategoriesDocument = gql`
    query Categories {
  categories {
    id
    name
    slug
    image {
      id
      url
    }
  }
}
    `;
export const GetProductsByCategoryIdDocument = gql`
    query GetProductsByCategoryId($id: ID!) {
  category(where: {id: $id}) {
    products {
      id
      name
      cents
      description
      image {
        id
        url
      }
    }
  }
}
    `;
export const ProductItemsByIdDocument = gql`
    query ProductItemsById($id: ID!) {
  product(where: {id: $id}) {
    name
    description
    description_long
    id
    slug
    cents
    image {
      id
      url
    }
    productItems {
      quantity
      item {
        name
      }
    }
  }
}
    `;
export const ProductsDocument = gql`
    query Products {
  products {
    description
    cents
    id
    name
    slug
    image {
      id
      url
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Categories(variables?: CategoriesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CategoriesQuery>(CategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Categories');
    },
    GetProductsByCategoryId(variables: GetProductsByCategoryIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProductsByCategoryIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductsByCategoryIdQuery>(GetProductsByCategoryIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetProductsByCategoryId');
    },
    ProductItemsById(variables: ProductItemsByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductItemsByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductItemsByIdQuery>(ProductItemsByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ProductItemsById');
    },
    Products(variables?: ProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProductsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProductsQuery>(ProductsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Products');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Aggregate: ResolverTypeWrapper<Aggregate>;
  Asset: ResolverTypeWrapper<Asset>;
  AssetConnectInput: AssetConnectInput;
  AssetConnection: ResolverTypeWrapper<AssetConnection>;
  AssetCreateInput: AssetCreateInput;
  AssetCreateLocalizationDataInput: AssetCreateLocalizationDataInput;
  AssetCreateLocalizationInput: AssetCreateLocalizationInput;
  AssetCreateLocalizationsInput: AssetCreateLocalizationsInput;
  AssetCreateManyInlineInput: AssetCreateManyInlineInput;
  AssetCreateOneInlineInput: AssetCreateOneInlineInput;
  AssetEdge: ResolverTypeWrapper<AssetEdge>;
  AssetManyWhereInput: AssetManyWhereInput;
  AssetOrderByInput: AssetOrderByInput;
  AssetTransformationInput: AssetTransformationInput;
  AssetUpdateInput: AssetUpdateInput;
  AssetUpdateLocalizationDataInput: AssetUpdateLocalizationDataInput;
  AssetUpdateLocalizationInput: AssetUpdateLocalizationInput;
  AssetUpdateLocalizationsInput: AssetUpdateLocalizationsInput;
  AssetUpdateManyInlineInput: AssetUpdateManyInlineInput;
  AssetUpdateManyInput: AssetUpdateManyInput;
  AssetUpdateManyLocalizationDataInput: AssetUpdateManyLocalizationDataInput;
  AssetUpdateManyLocalizationInput: AssetUpdateManyLocalizationInput;
  AssetUpdateManyLocalizationsInput: AssetUpdateManyLocalizationsInput;
  AssetUpdateManyWithNestedWhereInput: AssetUpdateManyWithNestedWhereInput;
  AssetUpdateOneInlineInput: AssetUpdateOneInlineInput;
  AssetUpdateWithNestedWhereUniqueInput: AssetUpdateWithNestedWhereUniqueInput;
  AssetUpsertInput: AssetUpsertInput;
  AssetUpsertLocalizationInput: AssetUpsertLocalizationInput;
  AssetUpsertWithNestedWhereUniqueInput: AssetUpsertWithNestedWhereUniqueInput;
  AssetWhereInput: AssetWhereInput;
  AssetWhereUniqueInput: AssetWhereUniqueInput;
  BatchPayload: ResolverTypeWrapper<BatchPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cart: ResolverTypeWrapper<Cart>;
  CartConnectInput: CartConnectInput;
  CartConnection: ResolverTypeWrapper<CartConnection>;
  CartCreateInput: CartCreateInput;
  CartCreateManyInlineInput: CartCreateManyInlineInput;
  CartCreateOneInlineInput: CartCreateOneInlineInput;
  CartEdge: ResolverTypeWrapper<CartEdge>;
  CartManyWhereInput: CartManyWhereInput;
  CartOrderByInput: CartOrderByInput;
  CartProduct: ResolverTypeWrapper<CartProduct>;
  CartProductConnectInput: CartProductConnectInput;
  CartProductConnection: ResolverTypeWrapper<CartProductConnection>;
  CartProductCreateInput: CartProductCreateInput;
  CartProductCreateManyInlineInput: CartProductCreateManyInlineInput;
  CartProductCreateOneInlineInput: CartProductCreateOneInlineInput;
  CartProductEdge: ResolverTypeWrapper<CartProductEdge>;
  CartProductManyWhereInput: CartProductManyWhereInput;
  CartProductOrderByInput: CartProductOrderByInput;
  CartProductUpdateInput: CartProductUpdateInput;
  CartProductUpdateManyInlineInput: CartProductUpdateManyInlineInput;
  CartProductUpdateManyInput: CartProductUpdateManyInput;
  CartProductUpdateManyWithNestedWhereInput: CartProductUpdateManyWithNestedWhereInput;
  CartProductUpdateOneInlineInput: CartProductUpdateOneInlineInput;
  CartProductUpdateWithNestedWhereUniqueInput: CartProductUpdateWithNestedWhereUniqueInput;
  CartProductUpsertInput: CartProductUpsertInput;
  CartProductUpsertWithNestedWhereUniqueInput: CartProductUpsertWithNestedWhereUniqueInput;
  CartProductWhereInput: CartProductWhereInput;
  CartProductWhereUniqueInput: CartProductWhereUniqueInput;
  CartUpdateInput: CartUpdateInput;
  CartUpdateManyInlineInput: CartUpdateManyInlineInput;
  CartUpdateManyInput: CartUpdateManyInput;
  CartUpdateManyWithNestedWhereInput: CartUpdateManyWithNestedWhereInput;
  CartUpdateOneInlineInput: CartUpdateOneInlineInput;
  CartUpdateWithNestedWhereUniqueInput: CartUpdateWithNestedWhereUniqueInput;
  CartUpsertInput: CartUpsertInput;
  CartUpsertWithNestedWhereUniqueInput: CartUpsertWithNestedWhereUniqueInput;
  CartWhereInput: CartWhereInput;
  CartWhereUniqueInput: CartWhereUniqueInput;
  Category: ResolverTypeWrapper<Category>;
  CategoryConnectInput: CategoryConnectInput;
  CategoryConnection: ResolverTypeWrapper<CategoryConnection>;
  CategoryCreateInput: CategoryCreateInput;
  CategoryCreateLocalizationDataInput: CategoryCreateLocalizationDataInput;
  CategoryCreateLocalizationInput: CategoryCreateLocalizationInput;
  CategoryCreateLocalizationsInput: CategoryCreateLocalizationsInput;
  CategoryCreateManyInlineInput: CategoryCreateManyInlineInput;
  CategoryCreateOneInlineInput: CategoryCreateOneInlineInput;
  CategoryEdge: ResolverTypeWrapper<CategoryEdge>;
  CategoryManyWhereInput: CategoryManyWhereInput;
  CategoryOrderByInput: CategoryOrderByInput;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryUpdateLocalizationDataInput: CategoryUpdateLocalizationDataInput;
  CategoryUpdateLocalizationInput: CategoryUpdateLocalizationInput;
  CategoryUpdateLocalizationsInput: CategoryUpdateLocalizationsInput;
  CategoryUpdateManyInlineInput: CategoryUpdateManyInlineInput;
  CategoryUpdateManyInput: CategoryUpdateManyInput;
  CategoryUpdateManyLocalizationDataInput: CategoryUpdateManyLocalizationDataInput;
  CategoryUpdateManyLocalizationInput: CategoryUpdateManyLocalizationInput;
  CategoryUpdateManyLocalizationsInput: CategoryUpdateManyLocalizationsInput;
  CategoryUpdateManyWithNestedWhereInput: CategoryUpdateManyWithNestedWhereInput;
  CategoryUpdateOneInlineInput: CategoryUpdateOneInlineInput;
  CategoryUpdateWithNestedWhereUniqueInput: CategoryUpdateWithNestedWhereUniqueInput;
  CategoryUpsertInput: CategoryUpsertInput;
  CategoryUpsertLocalizationInput: CategoryUpsertLocalizationInput;
  CategoryUpsertWithNestedWhereUniqueInput: CategoryUpsertWithNestedWhereUniqueInput;
  CategoryWhereInput: CategoryWhereInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionConnectInput: CollectionConnectInput;
  CollectionConnection: ResolverTypeWrapper<CollectionConnection>;
  CollectionCreateInput: CollectionCreateInput;
  CollectionCreateLocalizationDataInput: CollectionCreateLocalizationDataInput;
  CollectionCreateLocalizationInput: CollectionCreateLocalizationInput;
  CollectionCreateLocalizationsInput: CollectionCreateLocalizationsInput;
  CollectionCreateManyInlineInput: CollectionCreateManyInlineInput;
  CollectionCreateOneInlineInput: CollectionCreateOneInlineInput;
  CollectionEdge: ResolverTypeWrapper<CollectionEdge>;
  CollectionManyWhereInput: CollectionManyWhereInput;
  CollectionOrderByInput: CollectionOrderByInput;
  CollectionUpdateInput: CollectionUpdateInput;
  CollectionUpdateLocalizationDataInput: CollectionUpdateLocalizationDataInput;
  CollectionUpdateLocalizationInput: CollectionUpdateLocalizationInput;
  CollectionUpdateLocalizationsInput: CollectionUpdateLocalizationsInput;
  CollectionUpdateManyInlineInput: CollectionUpdateManyInlineInput;
  CollectionUpdateManyInput: CollectionUpdateManyInput;
  CollectionUpdateManyLocalizationDataInput: CollectionUpdateManyLocalizationDataInput;
  CollectionUpdateManyLocalizationInput: CollectionUpdateManyLocalizationInput;
  CollectionUpdateManyLocalizationsInput: CollectionUpdateManyLocalizationsInput;
  CollectionUpdateManyWithNestedWhereInput: CollectionUpdateManyWithNestedWhereInput;
  CollectionUpdateOneInlineInput: CollectionUpdateOneInlineInput;
  CollectionUpdateWithNestedWhereUniqueInput: CollectionUpdateWithNestedWhereUniqueInput;
  CollectionUpsertInput: CollectionUpsertInput;
  CollectionUpsertLocalizationInput: CollectionUpsertLocalizationInput;
  CollectionUpsertWithNestedWhereUniqueInput: CollectionUpsertWithNestedWhereUniqueInput;
  CollectionWhereInput: CollectionWhereInput;
  CollectionWhereUniqueInput: CollectionWhereUniqueInput;
  Color: ResolverTypeWrapper<Color>;
  ColorInput: ColorInput;
  ConnectPositionInput: ConnectPositionInput;
  Currency: ResolverTypeWrapper<Currency>;
  CurrencyConnectInput: CurrencyConnectInput;
  CurrencyConnection: ResolverTypeWrapper<CurrencyConnection>;
  CurrencyCreateInput: CurrencyCreateInput;
  CurrencyCreateManyInlineInput: CurrencyCreateManyInlineInput;
  CurrencyCreateOneInlineInput: CurrencyCreateOneInlineInput;
  CurrencyEdge: ResolverTypeWrapper<CurrencyEdge>;
  CurrencyManyWhereInput: CurrencyManyWhereInput;
  CurrencyOrderByInput: CurrencyOrderByInput;
  CurrencyUpdateInput: CurrencyUpdateInput;
  CurrencyUpdateManyInlineInput: CurrencyUpdateManyInlineInput;
  CurrencyUpdateManyInput: CurrencyUpdateManyInput;
  CurrencyUpdateManyWithNestedWhereInput: CurrencyUpdateManyWithNestedWhereInput;
  CurrencyUpdateOneInlineInput: CurrencyUpdateOneInlineInput;
  CurrencyUpdateWithNestedWhereUniqueInput: CurrencyUpdateWithNestedWhereUniqueInput;
  CurrencyUpsertInput: CurrencyUpsertInput;
  CurrencyUpsertWithNestedWhereUniqueInput: CurrencyUpsertWithNestedWhereUniqueInput;
  CurrencyWhereInput: CurrencyWhereInput;
  CurrencyWhereUniqueInput: CurrencyWhereUniqueInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DocumentFileTypes: DocumentFileTypes;
  DocumentOutputInput: DocumentOutputInput;
  DocumentTransformationInput: DocumentTransformationInput;
  DocumentVersion: ResolverTypeWrapper<DocumentVersion>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Hex: ResolverTypeWrapper<Scalars['Hex']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ImageFit: ImageFit;
  ImageResizeInput: ImageResizeInput;
  ImageTransformationInput: ImageTransformationInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Item: ResolverTypeWrapper<Item>;
  ItemConnectInput: ItemConnectInput;
  ItemConnection: ResolverTypeWrapper<ItemConnection>;
  ItemCreateInput: ItemCreateInput;
  ItemCreateManyInlineInput: ItemCreateManyInlineInput;
  ItemCreateOneInlineInput: ItemCreateOneInlineInput;
  ItemEdge: ResolverTypeWrapper<ItemEdge>;
  ItemManyWhereInput: ItemManyWhereInput;
  ItemOrderByInput: ItemOrderByInput;
  ItemUpdateInput: ItemUpdateInput;
  ItemUpdateManyInlineInput: ItemUpdateManyInlineInput;
  ItemUpdateManyInput: ItemUpdateManyInput;
  ItemUpdateManyWithNestedWhereInput: ItemUpdateManyWithNestedWhereInput;
  ItemUpdateOneInlineInput: ItemUpdateOneInlineInput;
  ItemUpdateWithNestedWhereUniqueInput: ItemUpdateWithNestedWhereUniqueInput;
  ItemUpsertInput: ItemUpsertInput;
  ItemUpsertWithNestedWhereUniqueInput: ItemUpsertWithNestedWhereUniqueInput;
  ItemWhereInput: ItemWhereInput;
  ItemWhereUniqueInput: ItemWhereUniqueInput;
  Json: ResolverTypeWrapper<Scalars['Json']>;
  Locale: Locale;
  Location: ResolverTypeWrapper<Location>;
  LocationInput: LocationInput;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['Asset'] | ResolversTypes['Cart'] | ResolversTypes['CartProduct'] | ResolversTypes['Category'] | ResolversTypes['Collection'] | ResolversTypes['Currency'] | ResolversTypes['Item'] | ResolversTypes['Order'] | ResolversTypes['OrderItem'] | ResolversTypes['Product'] | ResolversTypes['ProductItem'] | ResolversTypes['Review'] | ResolversTypes['ScheduledOperation'] | ResolversTypes['ScheduledRelease'] | ResolversTypes['User'];
  Order: ResolverTypeWrapper<Order>;
  OrderConnectInput: OrderConnectInput;
  OrderConnection: ResolverTypeWrapper<OrderConnection>;
  OrderCreateInput: OrderCreateInput;
  OrderCreateManyInlineInput: OrderCreateManyInlineInput;
  OrderCreateOneInlineInput: OrderCreateOneInlineInput;
  OrderEdge: ResolverTypeWrapper<OrderEdge>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderItemConnectInput: OrderItemConnectInput;
  OrderItemConnection: ResolverTypeWrapper<OrderItemConnection>;
  OrderItemCreateInput: OrderItemCreateInput;
  OrderItemCreateManyInlineInput: OrderItemCreateManyInlineInput;
  OrderItemCreateOneInlineInput: OrderItemCreateOneInlineInput;
  OrderItemEdge: ResolverTypeWrapper<OrderItemEdge>;
  OrderItemManyWhereInput: OrderItemManyWhereInput;
  OrderItemOrderByInput: OrderItemOrderByInput;
  OrderItemUpdateInput: OrderItemUpdateInput;
  OrderItemUpdateManyInlineInput: OrderItemUpdateManyInlineInput;
  OrderItemUpdateManyInput: OrderItemUpdateManyInput;
  OrderItemUpdateManyWithNestedWhereInput: OrderItemUpdateManyWithNestedWhereInput;
  OrderItemUpdateOneInlineInput: OrderItemUpdateOneInlineInput;
  OrderItemUpdateWithNestedWhereUniqueInput: OrderItemUpdateWithNestedWhereUniqueInput;
  OrderItemUpsertInput: OrderItemUpsertInput;
  OrderItemUpsertWithNestedWhereUniqueInput: OrderItemUpsertWithNestedWhereUniqueInput;
  OrderItemWhereInput: OrderItemWhereInput;
  OrderItemWhereUniqueInput: OrderItemWhereUniqueInput;
  OrderManyWhereInput: OrderManyWhereInput;
  OrderOrderByInput: OrderOrderByInput;
  OrderUpdateInput: OrderUpdateInput;
  OrderUpdateManyInlineInput: OrderUpdateManyInlineInput;
  OrderUpdateManyInput: OrderUpdateManyInput;
  OrderUpdateManyWithNestedWhereInput: OrderUpdateManyWithNestedWhereInput;
  OrderUpdateOneInlineInput: OrderUpdateOneInlineInput;
  OrderUpdateWithNestedWhereUniqueInput: OrderUpdateWithNestedWhereUniqueInput;
  OrderUpsertInput: OrderUpsertInput;
  OrderUpsertWithNestedWhereUniqueInput: OrderUpsertWithNestedWhereUniqueInput;
  OrderWhereInput: OrderWhereInput;
  OrderWhereUniqueInput: OrderWhereUniqueInput;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Product: ResolverTypeWrapper<Product>;
  ProductConnectInput: ProductConnectInput;
  ProductConnection: ResolverTypeWrapper<ProductConnection>;
  ProductCreateInput: ProductCreateInput;
  ProductCreateLocalizationDataInput: ProductCreateLocalizationDataInput;
  ProductCreateLocalizationInput: ProductCreateLocalizationInput;
  ProductCreateLocalizationsInput: ProductCreateLocalizationsInput;
  ProductCreateManyInlineInput: ProductCreateManyInlineInput;
  ProductCreateOneInlineInput: ProductCreateOneInlineInput;
  ProductEdge: ResolverTypeWrapper<ProductEdge>;
  ProductItem: ResolverTypeWrapper<ProductItem>;
  ProductItemConnectInput: ProductItemConnectInput;
  ProductItemConnection: ResolverTypeWrapper<ProductItemConnection>;
  ProductItemCreateInput: ProductItemCreateInput;
  ProductItemCreateManyInlineInput: ProductItemCreateManyInlineInput;
  ProductItemCreateOneInlineInput: ProductItemCreateOneInlineInput;
  ProductItemEdge: ResolverTypeWrapper<ProductItemEdge>;
  ProductItemManyWhereInput: ProductItemManyWhereInput;
  ProductItemOrderByInput: ProductItemOrderByInput;
  ProductItemUpdateInput: ProductItemUpdateInput;
  ProductItemUpdateManyInlineInput: ProductItemUpdateManyInlineInput;
  ProductItemUpdateManyInput: ProductItemUpdateManyInput;
  ProductItemUpdateManyWithNestedWhereInput: ProductItemUpdateManyWithNestedWhereInput;
  ProductItemUpdateOneInlineInput: ProductItemUpdateOneInlineInput;
  ProductItemUpdateWithNestedWhereUniqueInput: ProductItemUpdateWithNestedWhereUniqueInput;
  ProductItemUpsertInput: ProductItemUpsertInput;
  ProductItemUpsertWithNestedWhereUniqueInput: ProductItemUpsertWithNestedWhereUniqueInput;
  ProductItemWhereInput: ProductItemWhereInput;
  ProductItemWhereUniqueInput: ProductItemWhereUniqueInput;
  ProductManyWhereInput: ProductManyWhereInput;
  ProductOrderByInput: ProductOrderByInput;
  ProductUpdateInput: ProductUpdateInput;
  ProductUpdateLocalizationDataInput: ProductUpdateLocalizationDataInput;
  ProductUpdateLocalizationInput: ProductUpdateLocalizationInput;
  ProductUpdateLocalizationsInput: ProductUpdateLocalizationsInput;
  ProductUpdateManyInlineInput: ProductUpdateManyInlineInput;
  ProductUpdateManyInput: ProductUpdateManyInput;
  ProductUpdateManyLocalizationDataInput: ProductUpdateManyLocalizationDataInput;
  ProductUpdateManyLocalizationInput: ProductUpdateManyLocalizationInput;
  ProductUpdateManyLocalizationsInput: ProductUpdateManyLocalizationsInput;
  ProductUpdateManyWithNestedWhereInput: ProductUpdateManyWithNestedWhereInput;
  ProductUpdateOneInlineInput: ProductUpdateOneInlineInput;
  ProductUpdateWithNestedWhereUniqueInput: ProductUpdateWithNestedWhereUniqueInput;
  ProductUpsertInput: ProductUpsertInput;
  ProductUpsertLocalizationInput: ProductUpsertLocalizationInput;
  ProductUpsertWithNestedWhereUniqueInput: ProductUpsertWithNestedWhereUniqueInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  PublishLocaleInput: PublishLocaleInput;
  Query: ResolverTypeWrapper<{}>;
  RGBA: ResolverTypeWrapper<Rgba>;
  RGBAHue: ResolverTypeWrapper<Scalars['RGBAHue']>;
  RGBAInput: RgbaInput;
  RGBATransparency: ResolverTypeWrapper<Scalars['RGBATransparency']>;
  Review: ResolverTypeWrapper<Review>;
  ReviewConnectInput: ReviewConnectInput;
  ReviewConnection: ResolverTypeWrapper<ReviewConnection>;
  ReviewCreateInput: ReviewCreateInput;
  ReviewCreateManyInlineInput: ReviewCreateManyInlineInput;
  ReviewCreateOneInlineInput: ReviewCreateOneInlineInput;
  ReviewEdge: ResolverTypeWrapper<ReviewEdge>;
  ReviewManyWhereInput: ReviewManyWhereInput;
  ReviewOrderByInput: ReviewOrderByInput;
  ReviewUpdateInput: ReviewUpdateInput;
  ReviewUpdateManyInlineInput: ReviewUpdateManyInlineInput;
  ReviewUpdateManyInput: ReviewUpdateManyInput;
  ReviewUpdateManyWithNestedWhereInput: ReviewUpdateManyWithNestedWhereInput;
  ReviewUpdateOneInlineInput: ReviewUpdateOneInlineInput;
  ReviewUpdateWithNestedWhereUniqueInput: ReviewUpdateWithNestedWhereUniqueInput;
  ReviewUpsertInput: ReviewUpsertInput;
  ReviewUpsertWithNestedWhereUniqueInput: ReviewUpsertWithNestedWhereUniqueInput;
  ReviewWhereInput: ReviewWhereInput;
  ReviewWhereUniqueInput: ReviewWhereUniqueInput;
  RichText: ResolverTypeWrapper<RichText>;
  RichTextAST: ResolverTypeWrapper<Scalars['RichTextAST']>;
  ScheduledOperation: ResolverTypeWrapper<Omit<ScheduledOperation, 'affectedDocuments'> & { affectedDocuments: Array<ResolversTypes['ScheduledOperationAffectedDocument']> }>;
  ScheduledOperationAffectedDocument: ResolversTypes['Asset'] | ResolversTypes['Cart'] | ResolversTypes['CartProduct'] | ResolversTypes['Category'] | ResolversTypes['Collection'] | ResolversTypes['Currency'] | ResolversTypes['Item'] | ResolversTypes['Order'] | ResolversTypes['OrderItem'] | ResolversTypes['Product'] | ResolversTypes['ProductItem'] | ResolversTypes['Review'];
  ScheduledOperationConnectInput: ScheduledOperationConnectInput;
  ScheduledOperationConnection: ResolverTypeWrapper<ScheduledOperationConnection>;
  ScheduledOperationCreateManyInlineInput: ScheduledOperationCreateManyInlineInput;
  ScheduledOperationCreateOneInlineInput: ScheduledOperationCreateOneInlineInput;
  ScheduledOperationEdge: ResolverTypeWrapper<ScheduledOperationEdge>;
  ScheduledOperationManyWhereInput: ScheduledOperationManyWhereInput;
  ScheduledOperationOrderByInput: ScheduledOperationOrderByInput;
  ScheduledOperationStatus: ScheduledOperationStatus;
  ScheduledOperationUpdateManyInlineInput: ScheduledOperationUpdateManyInlineInput;
  ScheduledOperationUpdateOneInlineInput: ScheduledOperationUpdateOneInlineInput;
  ScheduledOperationWhereInput: ScheduledOperationWhereInput;
  ScheduledOperationWhereUniqueInput: ScheduledOperationWhereUniqueInput;
  ScheduledRelease: ResolverTypeWrapper<ScheduledRelease>;
  ScheduledReleaseConnectInput: ScheduledReleaseConnectInput;
  ScheduledReleaseConnection: ResolverTypeWrapper<ScheduledReleaseConnection>;
  ScheduledReleaseCreateInput: ScheduledReleaseCreateInput;
  ScheduledReleaseCreateManyInlineInput: ScheduledReleaseCreateManyInlineInput;
  ScheduledReleaseCreateOneInlineInput: ScheduledReleaseCreateOneInlineInput;
  ScheduledReleaseEdge: ResolverTypeWrapper<ScheduledReleaseEdge>;
  ScheduledReleaseManyWhereInput: ScheduledReleaseManyWhereInput;
  ScheduledReleaseOrderByInput: ScheduledReleaseOrderByInput;
  ScheduledReleaseStatus: ScheduledReleaseStatus;
  ScheduledReleaseUpdateInput: ScheduledReleaseUpdateInput;
  ScheduledReleaseUpdateManyInlineInput: ScheduledReleaseUpdateManyInlineInput;
  ScheduledReleaseUpdateManyInput: ScheduledReleaseUpdateManyInput;
  ScheduledReleaseUpdateManyWithNestedWhereInput: ScheduledReleaseUpdateManyWithNestedWhereInput;
  ScheduledReleaseUpdateOneInlineInput: ScheduledReleaseUpdateOneInlineInput;
  ScheduledReleaseUpdateWithNestedWhereUniqueInput: ScheduledReleaseUpdateWithNestedWhereUniqueInput;
  ScheduledReleaseUpsertInput: ScheduledReleaseUpsertInput;
  ScheduledReleaseUpsertWithNestedWhereUniqueInput: ScheduledReleaseUpsertWithNestedWhereUniqueInput;
  ScheduledReleaseWhereInput: ScheduledReleaseWhereInput;
  ScheduledReleaseWhereUniqueInput: ScheduledReleaseWhereUniqueInput;
  Stage: Stage;
  String: ResolverTypeWrapper<Scalars['String']>;
  SystemDateTimeFieldVariation: SystemDateTimeFieldVariation;
  UnpublishLocaleInput: UnpublishLocaleInput;
  User: ResolverTypeWrapper<User>;
  UserConnectInput: UserConnectInput;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserCreateManyInlineInput: UserCreateManyInlineInput;
  UserCreateOneInlineInput: UserCreateOneInlineInput;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserKind: UserKind;
  UserManyWhereInput: UserManyWhereInput;
  UserOrderByInput: UserOrderByInput;
  UserUpdateManyInlineInput: UserUpdateManyInlineInput;
  UserUpdateOneInlineInput: UserUpdateOneInlineInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  Version: ResolverTypeWrapper<Version>;
  VersionWhereInput: VersionWhereInput;
  _FilterKind: _FilterKind;
  _MutationInputFieldKind: _MutationInputFieldKind;
  _MutationKind: _MutationKind;
  _OrderDirection: _OrderDirection;
  _RelationInputCardinality: _RelationInputCardinality;
  _RelationInputKind: _RelationInputKind;
  _RelationKind: _RelationKind;
  _SystemDateTimeFieldVariation: _SystemDateTimeFieldVariation;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Aggregate: Aggregate;
  Asset: Asset;
  AssetConnectInput: AssetConnectInput;
  AssetConnection: AssetConnection;
  AssetCreateInput: AssetCreateInput;
  AssetCreateLocalizationDataInput: AssetCreateLocalizationDataInput;
  AssetCreateLocalizationInput: AssetCreateLocalizationInput;
  AssetCreateLocalizationsInput: AssetCreateLocalizationsInput;
  AssetCreateManyInlineInput: AssetCreateManyInlineInput;
  AssetCreateOneInlineInput: AssetCreateOneInlineInput;
  AssetEdge: AssetEdge;
  AssetManyWhereInput: AssetManyWhereInput;
  AssetTransformationInput: AssetTransformationInput;
  AssetUpdateInput: AssetUpdateInput;
  AssetUpdateLocalizationDataInput: AssetUpdateLocalizationDataInput;
  AssetUpdateLocalizationInput: AssetUpdateLocalizationInput;
  AssetUpdateLocalizationsInput: AssetUpdateLocalizationsInput;
  AssetUpdateManyInlineInput: AssetUpdateManyInlineInput;
  AssetUpdateManyInput: AssetUpdateManyInput;
  AssetUpdateManyLocalizationDataInput: AssetUpdateManyLocalizationDataInput;
  AssetUpdateManyLocalizationInput: AssetUpdateManyLocalizationInput;
  AssetUpdateManyLocalizationsInput: AssetUpdateManyLocalizationsInput;
  AssetUpdateManyWithNestedWhereInput: AssetUpdateManyWithNestedWhereInput;
  AssetUpdateOneInlineInput: AssetUpdateOneInlineInput;
  AssetUpdateWithNestedWhereUniqueInput: AssetUpdateWithNestedWhereUniqueInput;
  AssetUpsertInput: AssetUpsertInput;
  AssetUpsertLocalizationInput: AssetUpsertLocalizationInput;
  AssetUpsertWithNestedWhereUniqueInput: AssetUpsertWithNestedWhereUniqueInput;
  AssetWhereInput: AssetWhereInput;
  AssetWhereUniqueInput: AssetWhereUniqueInput;
  BatchPayload: BatchPayload;
  Boolean: Scalars['Boolean'];
  Cart: Cart;
  CartConnectInput: CartConnectInput;
  CartConnection: CartConnection;
  CartCreateInput: CartCreateInput;
  CartCreateManyInlineInput: CartCreateManyInlineInput;
  CartCreateOneInlineInput: CartCreateOneInlineInput;
  CartEdge: CartEdge;
  CartManyWhereInput: CartManyWhereInput;
  CartProduct: CartProduct;
  CartProductConnectInput: CartProductConnectInput;
  CartProductConnection: CartProductConnection;
  CartProductCreateInput: CartProductCreateInput;
  CartProductCreateManyInlineInput: CartProductCreateManyInlineInput;
  CartProductCreateOneInlineInput: CartProductCreateOneInlineInput;
  CartProductEdge: CartProductEdge;
  CartProductManyWhereInput: CartProductManyWhereInput;
  CartProductUpdateInput: CartProductUpdateInput;
  CartProductUpdateManyInlineInput: CartProductUpdateManyInlineInput;
  CartProductUpdateManyInput: CartProductUpdateManyInput;
  CartProductUpdateManyWithNestedWhereInput: CartProductUpdateManyWithNestedWhereInput;
  CartProductUpdateOneInlineInput: CartProductUpdateOneInlineInput;
  CartProductUpdateWithNestedWhereUniqueInput: CartProductUpdateWithNestedWhereUniqueInput;
  CartProductUpsertInput: CartProductUpsertInput;
  CartProductUpsertWithNestedWhereUniqueInput: CartProductUpsertWithNestedWhereUniqueInput;
  CartProductWhereInput: CartProductWhereInput;
  CartProductWhereUniqueInput: CartProductWhereUniqueInput;
  CartUpdateInput: CartUpdateInput;
  CartUpdateManyInlineInput: CartUpdateManyInlineInput;
  CartUpdateManyInput: CartUpdateManyInput;
  CartUpdateManyWithNestedWhereInput: CartUpdateManyWithNestedWhereInput;
  CartUpdateOneInlineInput: CartUpdateOneInlineInput;
  CartUpdateWithNestedWhereUniqueInput: CartUpdateWithNestedWhereUniqueInput;
  CartUpsertInput: CartUpsertInput;
  CartUpsertWithNestedWhereUniqueInput: CartUpsertWithNestedWhereUniqueInput;
  CartWhereInput: CartWhereInput;
  CartWhereUniqueInput: CartWhereUniqueInput;
  Category: Category;
  CategoryConnectInput: CategoryConnectInput;
  CategoryConnection: CategoryConnection;
  CategoryCreateInput: CategoryCreateInput;
  CategoryCreateLocalizationDataInput: CategoryCreateLocalizationDataInput;
  CategoryCreateLocalizationInput: CategoryCreateLocalizationInput;
  CategoryCreateLocalizationsInput: CategoryCreateLocalizationsInput;
  CategoryCreateManyInlineInput: CategoryCreateManyInlineInput;
  CategoryCreateOneInlineInput: CategoryCreateOneInlineInput;
  CategoryEdge: CategoryEdge;
  CategoryManyWhereInput: CategoryManyWhereInput;
  CategoryUpdateInput: CategoryUpdateInput;
  CategoryUpdateLocalizationDataInput: CategoryUpdateLocalizationDataInput;
  CategoryUpdateLocalizationInput: CategoryUpdateLocalizationInput;
  CategoryUpdateLocalizationsInput: CategoryUpdateLocalizationsInput;
  CategoryUpdateManyInlineInput: CategoryUpdateManyInlineInput;
  CategoryUpdateManyInput: CategoryUpdateManyInput;
  CategoryUpdateManyLocalizationDataInput: CategoryUpdateManyLocalizationDataInput;
  CategoryUpdateManyLocalizationInput: CategoryUpdateManyLocalizationInput;
  CategoryUpdateManyLocalizationsInput: CategoryUpdateManyLocalizationsInput;
  CategoryUpdateManyWithNestedWhereInput: CategoryUpdateManyWithNestedWhereInput;
  CategoryUpdateOneInlineInput: CategoryUpdateOneInlineInput;
  CategoryUpdateWithNestedWhereUniqueInput: CategoryUpdateWithNestedWhereUniqueInput;
  CategoryUpsertInput: CategoryUpsertInput;
  CategoryUpsertLocalizationInput: CategoryUpsertLocalizationInput;
  CategoryUpsertWithNestedWhereUniqueInput: CategoryUpsertWithNestedWhereUniqueInput;
  CategoryWhereInput: CategoryWhereInput;
  CategoryWhereUniqueInput: CategoryWhereUniqueInput;
  Collection: Collection;
  CollectionConnectInput: CollectionConnectInput;
  CollectionConnection: CollectionConnection;
  CollectionCreateInput: CollectionCreateInput;
  CollectionCreateLocalizationDataInput: CollectionCreateLocalizationDataInput;
  CollectionCreateLocalizationInput: CollectionCreateLocalizationInput;
  CollectionCreateLocalizationsInput: CollectionCreateLocalizationsInput;
  CollectionCreateManyInlineInput: CollectionCreateManyInlineInput;
  CollectionCreateOneInlineInput: CollectionCreateOneInlineInput;
  CollectionEdge: CollectionEdge;
  CollectionManyWhereInput: CollectionManyWhereInput;
  CollectionUpdateInput: CollectionUpdateInput;
  CollectionUpdateLocalizationDataInput: CollectionUpdateLocalizationDataInput;
  CollectionUpdateLocalizationInput: CollectionUpdateLocalizationInput;
  CollectionUpdateLocalizationsInput: CollectionUpdateLocalizationsInput;
  CollectionUpdateManyInlineInput: CollectionUpdateManyInlineInput;
  CollectionUpdateManyInput: CollectionUpdateManyInput;
  CollectionUpdateManyLocalizationDataInput: CollectionUpdateManyLocalizationDataInput;
  CollectionUpdateManyLocalizationInput: CollectionUpdateManyLocalizationInput;
  CollectionUpdateManyLocalizationsInput: CollectionUpdateManyLocalizationsInput;
  CollectionUpdateManyWithNestedWhereInput: CollectionUpdateManyWithNestedWhereInput;
  CollectionUpdateOneInlineInput: CollectionUpdateOneInlineInput;
  CollectionUpdateWithNestedWhereUniqueInput: CollectionUpdateWithNestedWhereUniqueInput;
  CollectionUpsertInput: CollectionUpsertInput;
  CollectionUpsertLocalizationInput: CollectionUpsertLocalizationInput;
  CollectionUpsertWithNestedWhereUniqueInput: CollectionUpsertWithNestedWhereUniqueInput;
  CollectionWhereInput: CollectionWhereInput;
  CollectionWhereUniqueInput: CollectionWhereUniqueInput;
  Color: Color;
  ColorInput: ColorInput;
  ConnectPositionInput: ConnectPositionInput;
  Currency: Currency;
  CurrencyConnectInput: CurrencyConnectInput;
  CurrencyConnection: CurrencyConnection;
  CurrencyCreateInput: CurrencyCreateInput;
  CurrencyCreateManyInlineInput: CurrencyCreateManyInlineInput;
  CurrencyCreateOneInlineInput: CurrencyCreateOneInlineInput;
  CurrencyEdge: CurrencyEdge;
  CurrencyManyWhereInput: CurrencyManyWhereInput;
  CurrencyUpdateInput: CurrencyUpdateInput;
  CurrencyUpdateManyInlineInput: CurrencyUpdateManyInlineInput;
  CurrencyUpdateManyInput: CurrencyUpdateManyInput;
  CurrencyUpdateManyWithNestedWhereInput: CurrencyUpdateManyWithNestedWhereInput;
  CurrencyUpdateOneInlineInput: CurrencyUpdateOneInlineInput;
  CurrencyUpdateWithNestedWhereUniqueInput: CurrencyUpdateWithNestedWhereUniqueInput;
  CurrencyUpsertInput: CurrencyUpsertInput;
  CurrencyUpsertWithNestedWhereUniqueInput: CurrencyUpsertWithNestedWhereUniqueInput;
  CurrencyWhereInput: CurrencyWhereInput;
  CurrencyWhereUniqueInput: CurrencyWhereUniqueInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  DocumentOutputInput: DocumentOutputInput;
  DocumentTransformationInput: DocumentTransformationInput;
  DocumentVersion: DocumentVersion;
  Float: Scalars['Float'];
  Hex: Scalars['Hex'];
  ID: Scalars['ID'];
  ImageResizeInput: ImageResizeInput;
  ImageTransformationInput: ImageTransformationInput;
  Int: Scalars['Int'];
  Item: Item;
  ItemConnectInput: ItemConnectInput;
  ItemConnection: ItemConnection;
  ItemCreateInput: ItemCreateInput;
  ItemCreateManyInlineInput: ItemCreateManyInlineInput;
  ItemCreateOneInlineInput: ItemCreateOneInlineInput;
  ItemEdge: ItemEdge;
  ItemManyWhereInput: ItemManyWhereInput;
  ItemUpdateInput: ItemUpdateInput;
  ItemUpdateManyInlineInput: ItemUpdateManyInlineInput;
  ItemUpdateManyInput: ItemUpdateManyInput;
  ItemUpdateManyWithNestedWhereInput: ItemUpdateManyWithNestedWhereInput;
  ItemUpdateOneInlineInput: ItemUpdateOneInlineInput;
  ItemUpdateWithNestedWhereUniqueInput: ItemUpdateWithNestedWhereUniqueInput;
  ItemUpsertInput: ItemUpsertInput;
  ItemUpsertWithNestedWhereUniqueInput: ItemUpsertWithNestedWhereUniqueInput;
  ItemWhereInput: ItemWhereInput;
  ItemWhereUniqueInput: ItemWhereUniqueInput;
  Json: Scalars['Json'];
  Location: Location;
  LocationInput: LocationInput;
  Long: Scalars['Long'];
  Mutation: {};
  Node: ResolversParentTypes['Asset'] | ResolversParentTypes['Cart'] | ResolversParentTypes['CartProduct'] | ResolversParentTypes['Category'] | ResolversParentTypes['Collection'] | ResolversParentTypes['Currency'] | ResolversParentTypes['Item'] | ResolversParentTypes['Order'] | ResolversParentTypes['OrderItem'] | ResolversParentTypes['Product'] | ResolversParentTypes['ProductItem'] | ResolversParentTypes['Review'] | ResolversParentTypes['ScheduledOperation'] | ResolversParentTypes['ScheduledRelease'] | ResolversParentTypes['User'];
  Order: Order;
  OrderConnectInput: OrderConnectInput;
  OrderConnection: OrderConnection;
  OrderCreateInput: OrderCreateInput;
  OrderCreateManyInlineInput: OrderCreateManyInlineInput;
  OrderCreateOneInlineInput: OrderCreateOneInlineInput;
  OrderEdge: OrderEdge;
  OrderItem: OrderItem;
  OrderItemConnectInput: OrderItemConnectInput;
  OrderItemConnection: OrderItemConnection;
  OrderItemCreateInput: OrderItemCreateInput;
  OrderItemCreateManyInlineInput: OrderItemCreateManyInlineInput;
  OrderItemCreateOneInlineInput: OrderItemCreateOneInlineInput;
  OrderItemEdge: OrderItemEdge;
  OrderItemManyWhereInput: OrderItemManyWhereInput;
  OrderItemUpdateInput: OrderItemUpdateInput;
  OrderItemUpdateManyInlineInput: OrderItemUpdateManyInlineInput;
  OrderItemUpdateManyInput: OrderItemUpdateManyInput;
  OrderItemUpdateManyWithNestedWhereInput: OrderItemUpdateManyWithNestedWhereInput;
  OrderItemUpdateOneInlineInput: OrderItemUpdateOneInlineInput;
  OrderItemUpdateWithNestedWhereUniqueInput: OrderItemUpdateWithNestedWhereUniqueInput;
  OrderItemUpsertInput: OrderItemUpsertInput;
  OrderItemUpsertWithNestedWhereUniqueInput: OrderItemUpsertWithNestedWhereUniqueInput;
  OrderItemWhereInput: OrderItemWhereInput;
  OrderItemWhereUniqueInput: OrderItemWhereUniqueInput;
  OrderManyWhereInput: OrderManyWhereInput;
  OrderUpdateInput: OrderUpdateInput;
  OrderUpdateManyInlineInput: OrderUpdateManyInlineInput;
  OrderUpdateManyInput: OrderUpdateManyInput;
  OrderUpdateManyWithNestedWhereInput: OrderUpdateManyWithNestedWhereInput;
  OrderUpdateOneInlineInput: OrderUpdateOneInlineInput;
  OrderUpdateWithNestedWhereUniqueInput: OrderUpdateWithNestedWhereUniqueInput;
  OrderUpsertInput: OrderUpsertInput;
  OrderUpsertWithNestedWhereUniqueInput: OrderUpsertWithNestedWhereUniqueInput;
  OrderWhereInput: OrderWhereInput;
  OrderWhereUniqueInput: OrderWhereUniqueInput;
  PageInfo: PageInfo;
  Product: Product;
  ProductConnectInput: ProductConnectInput;
  ProductConnection: ProductConnection;
  ProductCreateInput: ProductCreateInput;
  ProductCreateLocalizationDataInput: ProductCreateLocalizationDataInput;
  ProductCreateLocalizationInput: ProductCreateLocalizationInput;
  ProductCreateLocalizationsInput: ProductCreateLocalizationsInput;
  ProductCreateManyInlineInput: ProductCreateManyInlineInput;
  ProductCreateOneInlineInput: ProductCreateOneInlineInput;
  ProductEdge: ProductEdge;
  ProductItem: ProductItem;
  ProductItemConnectInput: ProductItemConnectInput;
  ProductItemConnection: ProductItemConnection;
  ProductItemCreateInput: ProductItemCreateInput;
  ProductItemCreateManyInlineInput: ProductItemCreateManyInlineInput;
  ProductItemCreateOneInlineInput: ProductItemCreateOneInlineInput;
  ProductItemEdge: ProductItemEdge;
  ProductItemManyWhereInput: ProductItemManyWhereInput;
  ProductItemUpdateInput: ProductItemUpdateInput;
  ProductItemUpdateManyInlineInput: ProductItemUpdateManyInlineInput;
  ProductItemUpdateManyInput: ProductItemUpdateManyInput;
  ProductItemUpdateManyWithNestedWhereInput: ProductItemUpdateManyWithNestedWhereInput;
  ProductItemUpdateOneInlineInput: ProductItemUpdateOneInlineInput;
  ProductItemUpdateWithNestedWhereUniqueInput: ProductItemUpdateWithNestedWhereUniqueInput;
  ProductItemUpsertInput: ProductItemUpsertInput;
  ProductItemUpsertWithNestedWhereUniqueInput: ProductItemUpsertWithNestedWhereUniqueInput;
  ProductItemWhereInput: ProductItemWhereInput;
  ProductItemWhereUniqueInput: ProductItemWhereUniqueInput;
  ProductManyWhereInput: ProductManyWhereInput;
  ProductUpdateInput: ProductUpdateInput;
  ProductUpdateLocalizationDataInput: ProductUpdateLocalizationDataInput;
  ProductUpdateLocalizationInput: ProductUpdateLocalizationInput;
  ProductUpdateLocalizationsInput: ProductUpdateLocalizationsInput;
  ProductUpdateManyInlineInput: ProductUpdateManyInlineInput;
  ProductUpdateManyInput: ProductUpdateManyInput;
  ProductUpdateManyLocalizationDataInput: ProductUpdateManyLocalizationDataInput;
  ProductUpdateManyLocalizationInput: ProductUpdateManyLocalizationInput;
  ProductUpdateManyLocalizationsInput: ProductUpdateManyLocalizationsInput;
  ProductUpdateManyWithNestedWhereInput: ProductUpdateManyWithNestedWhereInput;
  ProductUpdateOneInlineInput: ProductUpdateOneInlineInput;
  ProductUpdateWithNestedWhereUniqueInput: ProductUpdateWithNestedWhereUniqueInput;
  ProductUpsertInput: ProductUpsertInput;
  ProductUpsertLocalizationInput: ProductUpsertLocalizationInput;
  ProductUpsertWithNestedWhereUniqueInput: ProductUpsertWithNestedWhereUniqueInput;
  ProductWhereInput: ProductWhereInput;
  ProductWhereUniqueInput: ProductWhereUniqueInput;
  PublishLocaleInput: PublishLocaleInput;
  Query: {};
  RGBA: Rgba;
  RGBAHue: Scalars['RGBAHue'];
  RGBAInput: RgbaInput;
  RGBATransparency: Scalars['RGBATransparency'];
  Review: Review;
  ReviewConnectInput: ReviewConnectInput;
  ReviewConnection: ReviewConnection;
  ReviewCreateInput: ReviewCreateInput;
  ReviewCreateManyInlineInput: ReviewCreateManyInlineInput;
  ReviewCreateOneInlineInput: ReviewCreateOneInlineInput;
  ReviewEdge: ReviewEdge;
  ReviewManyWhereInput: ReviewManyWhereInput;
  ReviewUpdateInput: ReviewUpdateInput;
  ReviewUpdateManyInlineInput: ReviewUpdateManyInlineInput;
  ReviewUpdateManyInput: ReviewUpdateManyInput;
  ReviewUpdateManyWithNestedWhereInput: ReviewUpdateManyWithNestedWhereInput;
  ReviewUpdateOneInlineInput: ReviewUpdateOneInlineInput;
  ReviewUpdateWithNestedWhereUniqueInput: ReviewUpdateWithNestedWhereUniqueInput;
  ReviewUpsertInput: ReviewUpsertInput;
  ReviewUpsertWithNestedWhereUniqueInput: ReviewUpsertWithNestedWhereUniqueInput;
  ReviewWhereInput: ReviewWhereInput;
  ReviewWhereUniqueInput: ReviewWhereUniqueInput;
  RichText: RichText;
  RichTextAST: Scalars['RichTextAST'];
  ScheduledOperation: Omit<ScheduledOperation, 'affectedDocuments'> & { affectedDocuments: Array<ResolversParentTypes['ScheduledOperationAffectedDocument']> };
  ScheduledOperationAffectedDocument: ResolversParentTypes['Asset'] | ResolversParentTypes['Cart'] | ResolversParentTypes['CartProduct'] | ResolversParentTypes['Category'] | ResolversParentTypes['Collection'] | ResolversParentTypes['Currency'] | ResolversParentTypes['Item'] | ResolversParentTypes['Order'] | ResolversParentTypes['OrderItem'] | ResolversParentTypes['Product'] | ResolversParentTypes['ProductItem'] | ResolversParentTypes['Review'];
  ScheduledOperationConnectInput: ScheduledOperationConnectInput;
  ScheduledOperationConnection: ScheduledOperationConnection;
  ScheduledOperationCreateManyInlineInput: ScheduledOperationCreateManyInlineInput;
  ScheduledOperationCreateOneInlineInput: ScheduledOperationCreateOneInlineInput;
  ScheduledOperationEdge: ScheduledOperationEdge;
  ScheduledOperationManyWhereInput: ScheduledOperationManyWhereInput;
  ScheduledOperationUpdateManyInlineInput: ScheduledOperationUpdateManyInlineInput;
  ScheduledOperationUpdateOneInlineInput: ScheduledOperationUpdateOneInlineInput;
  ScheduledOperationWhereInput: ScheduledOperationWhereInput;
  ScheduledOperationWhereUniqueInput: ScheduledOperationWhereUniqueInput;
  ScheduledRelease: ScheduledRelease;
  ScheduledReleaseConnectInput: ScheduledReleaseConnectInput;
  ScheduledReleaseConnection: ScheduledReleaseConnection;
  ScheduledReleaseCreateInput: ScheduledReleaseCreateInput;
  ScheduledReleaseCreateManyInlineInput: ScheduledReleaseCreateManyInlineInput;
  ScheduledReleaseCreateOneInlineInput: ScheduledReleaseCreateOneInlineInput;
  ScheduledReleaseEdge: ScheduledReleaseEdge;
  ScheduledReleaseManyWhereInput: ScheduledReleaseManyWhereInput;
  ScheduledReleaseUpdateInput: ScheduledReleaseUpdateInput;
  ScheduledReleaseUpdateManyInlineInput: ScheduledReleaseUpdateManyInlineInput;
  ScheduledReleaseUpdateManyInput: ScheduledReleaseUpdateManyInput;
  ScheduledReleaseUpdateManyWithNestedWhereInput: ScheduledReleaseUpdateManyWithNestedWhereInput;
  ScheduledReleaseUpdateOneInlineInput: ScheduledReleaseUpdateOneInlineInput;
  ScheduledReleaseUpdateWithNestedWhereUniqueInput: ScheduledReleaseUpdateWithNestedWhereUniqueInput;
  ScheduledReleaseUpsertInput: ScheduledReleaseUpsertInput;
  ScheduledReleaseUpsertWithNestedWhereUniqueInput: ScheduledReleaseUpsertWithNestedWhereUniqueInput;
  ScheduledReleaseWhereInput: ScheduledReleaseWhereInput;
  ScheduledReleaseWhereUniqueInput: ScheduledReleaseWhereUniqueInput;
  String: Scalars['String'];
  UnpublishLocaleInput: UnpublishLocaleInput;
  User: User;
  UserConnectInput: UserConnectInput;
  UserConnection: UserConnection;
  UserCreateManyInlineInput: UserCreateManyInlineInput;
  UserCreateOneInlineInput: UserCreateOneInlineInput;
  UserEdge: UserEdge;
  UserManyWhereInput: UserManyWhereInput;
  UserUpdateManyInlineInput: UserUpdateManyInlineInput;
  UserUpdateOneInlineInput: UserUpdateOneInlineInput;
  UserWhereInput: UserWhereInput;
  UserWhereUniqueInput: UserWhereUniqueInput;
  Version: Version;
  VersionWhereInput: VersionWhereInput;
};

export type DefaultOverrideDirectiveArgs = {
  args: Array<Scalars['String']>;
};

export type DefaultOverrideDirectiveResolver<Result, Parent, ContextType = any, Args = DefaultOverrideDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MarkDirectiveArgs = {
  aggregate?: Maybe<Scalars['Boolean']>;
  connectInput?: Maybe<Scalars['String']>;
  connection?: Maybe<Scalars['String']>;
  countable?: Maybe<Scalars['Boolean']>;
  createInputType?: Maybe<Scalars['String']>;
  createLocalizationInputType?: Maybe<Scalars['String']>;
  createdAtField?: Maybe<Scalars['String']>;
  default?: Maybe<Scalars['Boolean']>;
  documentVersion?: Maybe<Scalars['Boolean']>;
  edge?: Maybe<Scalars['Boolean']>;
  fieldType?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  filterIsList?: Maybe<Scalars['Boolean']>;
  filterKind?: Maybe<_FilterKind>;
  isComponent?: Maybe<Scalars['Boolean']>;
  isConnectInput?: Maybe<Scalars['Boolean']>;
  isListRichText?: Maybe<Scalars['Boolean']>;
  isMemberInput?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isRichTextType?: Maybe<Scalars['Boolean']>;
  isUnidirectional?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['Boolean']>;
  localizations?: Maybe<Scalars['Boolean']>;
  localized?: Maybe<Scalars['Boolean']>;
  model?: Maybe<Scalars['String']>;
  modelVersions?: Maybe<Scalars['Boolean']>;
  mutationInputFieldKind?: Maybe<_MutationInputFieldKind>;
  mutationKind?: Maybe<_MutationKind>;
  order?: Maybe<Scalars['Boolean']>;
  orderDirection?: Maybe<_OrderDirection>;
  pageInfo?: Maybe<Scalars['Boolean']>;
  relationInputCardinality?: Maybe<_RelationInputCardinality>;
  relationInputKind?: Maybe<_RelationInputKind>;
  relationKind?: Maybe<_RelationKind>;
  replaceableWithUserId?: Maybe<Scalars['Boolean']>;
  reverseRelationInputCardinality?: Maybe<_RelationInputCardinality>;
  richTextType?: Maybe<Scalars['String']>;
  stages?: Maybe<Scalars['Boolean']>;
  storageId?: Maybe<Scalars['String']>;
  systemDateTimeFieldVariation?: Maybe<_SystemDateTimeFieldVariation>;
  unionType?: Maybe<Scalars['Boolean']>;
  updatedAtField?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['Boolean']>;
  validations?: Maybe<Scalars['String']>;
  versionRetentionCount?: Maybe<Scalars['Int']>;
  versionRetentionPeriod?: Maybe<Scalars['Int']>;
  whereUniqueInput?: Maybe<Scalars['String']>;
};

export type MarkDirectiveResolver<Result, Parent, ContextType = any, Args = MarkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type PermissionDirectiveArgs = {
  actions?: Maybe<Array<Scalars['String']>>;
  resources?: Maybe<Array<Scalars['String']>>;
};

export type PermissionDirectiveResolver<Result, Parent, ContextType = any, Args = PermissionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type PsqlDirectiveArgs = {
  column?: Maybe<Scalars['String']>;
  componentParentFieldValue?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  idColumn?: Maybe<Scalars['String']>;
  join?: Maybe<Scalars['String']>;
  localizationTable?: Maybe<Scalars['String']>;
  memberColumns?: Maybe<Array<Scalars['String']>>;
  prio?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  updatedAtColumn?: Maybe<Scalars['String']>;
};

export type PsqlDirectiveResolver<Result, Parent, ContextType = any, Args = PsqlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RemoteDirectiveArgs = {
  headers?: Maybe<Scalars['Json']>;
  method: Scalars['String'];
  payloadFields: Array<Scalars['String']>;
  requestParamFields: Array<Scalars['String']>;
  url: Scalars['String'];
};

export type RemoteDirectiveResolver<Result, Parent, ContextType = any, Args = RemoteDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Aggregate'] = ResolversParentTypes['Aggregate']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<AssetCreatedAtArgs, 'variation'>>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<AssetCreatedByArgs>>;
  documentInStages?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<AssetDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<AssetHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageCategory?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, Partial<AssetImageCategoryArgs>>;
  imageProduct?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, Partial<AssetImageProductArgs>>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localizations?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<AssetLocalizationsArgs, 'includeCurrent' | 'locales'>>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productImages?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, Partial<AssetProductImagesArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<AssetPublishedAtArgs, 'variation'>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<AssetPublishedByArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<AssetScheduledInArgs>>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<AssetUpdatedAtArgs, 'variation'>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<AssetUpdatedByArgs>>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<AssetUrlArgs>>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetConnection'] = ResolversParentTypes['AssetConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['AssetEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AssetEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AssetEdge'] = ResolversParentTypes['AssetEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Asset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BatchPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['BatchPayload'] = ResolversParentTypes['BatchPayload']> = {
  count?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  cartProducts?: Resolver<Array<ResolversTypes['CartProduct']>, ParentType, ContextType, Partial<CartCartProductsArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CartCreatedByArgs>>;
  documentInStages?: Resolver<Array<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<CartDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<CartHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CartPublishedByArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<CartScheduledInArgs>>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CartUpdatedByArgs>>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartConnection'] = ResolversParentTypes['CartConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['CartEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartEdge'] = ResolversParentTypes['CartEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Cart'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartProduct'] = ResolversParentTypes['CartProduct']> = {
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, Partial<CartProductCartArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CartProductCreatedByArgs>>;
  documentInStages?: Resolver<Array<ResolversTypes['CartProduct']>, ParentType, ContextType, RequireFields<CartProductDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<CartProductHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<CartProductProductArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CartProductPublishedByArgs>>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<CartProductScheduledInArgs>>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CartProductUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartProductConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartProductConnection'] = ResolversParentTypes['CartProductConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['CartProductEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartProductEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartProductEdge'] = ResolversParentTypes['CartProductEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['CartProduct'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<CategoryCreatedAtArgs, 'variation'>>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CategoryCreatedByArgs>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<CategoryDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<CategoryHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['Asset'], ParentType, ContextType, Partial<CategoryImageArgs>>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localizations?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<CategoryLocalizationsArgs, 'includeCurrent' | 'locales'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, Partial<CategoryProductsArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<CategoryPublishedAtArgs, 'variation'>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CategoryPublishedByArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<CategoryScheduledInArgs>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<CategoryUpdatedAtArgs, 'variation'>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CategoryUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryConnection'] = ResolversParentTypes['CategoryConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['CategoryEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryEdge'] = ResolversParentTypes['CategoryEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<CollectionCreatedAtArgs, 'variation'>>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CollectionCreatedByArgs>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<CollectionDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<CollectionHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localizations?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<CollectionLocalizationsArgs, 'includeCurrent' | 'locales'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, Partial<CollectionProductsArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<CollectionPublishedAtArgs, 'variation'>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CollectionPublishedByArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<CollectionScheduledInArgs>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<CollectionUpdatedAtArgs, 'variation'>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CollectionUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionConnection'] = ResolversParentTypes['CollectionConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['CollectionEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionEdge'] = ResolversParentTypes['CollectionEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Color'] = ResolversParentTypes['Color']> = {
  css?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hex?: Resolver<ResolversTypes['Hex'], ParentType, ContextType>;
  rgba?: Resolver<ResolversTypes['RGBA'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CurrencyCreatedByArgs>>;
  default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<CurrencyDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<CurrencyHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CurrencyPublishedByArgs>>;
  rate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<CurrencyScheduledInArgs>>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<CurrencyUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrencyConnection'] = ResolversParentTypes['CurrencyConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['CurrencyEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrencyEdge'] = ResolversParentTypes['CurrencyEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DocumentVersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['DocumentVersion'] = ResolversParentTypes['DocumentVersion']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HexScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hex'], any> {
  name: 'Hex';
}

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ItemCreatedByArgs>>;
  documentInStages?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<ItemDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<ItemHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productItem?: Resolver<Maybe<ResolversTypes['ProductItem']>, ParentType, ContextType, Partial<ItemProductItemArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ItemPublishedByArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<ItemScheduledInArgs>>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ItemUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemConnection'] = ResolversParentTypes['ItemConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ItemEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemEdge'] = ResolversParentTypes['ItemEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json';
}

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  distance?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<LocationDistanceArgs, 'from'>>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationCreateAssetArgs, 'data'>>;
  createCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationCreateCartArgs, 'data'>>;
  createCartProduct?: Resolver<Maybe<ResolversTypes['CartProduct']>, ParentType, ContextType, RequireFields<MutationCreateCartProductArgs, 'data'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'data'>>;
  createCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MutationCreateCollectionArgs, 'data'>>;
  createCurrency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<MutationCreateCurrencyArgs, 'data'>>;
  createItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationCreateItemArgs, 'data'>>;
  createOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'data'>>;
  createOrderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<MutationCreateOrderItemArgs, 'data'>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'data'>>;
  createProductItem?: Resolver<Maybe<ResolversTypes['ProductItem']>, ParentType, ContextType, RequireFields<MutationCreateProductItemArgs, 'data'>>;
  createReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationCreateReviewArgs, 'data'>>;
  createScheduledRelease?: Resolver<Maybe<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, RequireFields<MutationCreateScheduledReleaseArgs, 'data'>>;
  deleteAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationDeleteAssetArgs, 'where'>>;
  deleteCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationDeleteCartArgs, 'where'>>;
  deleteCartProduct?: Resolver<Maybe<ResolversTypes['CartProduct']>, ParentType, ContextType, RequireFields<MutationDeleteCartProductArgs, 'where'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'where'>>;
  deleteCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MutationDeleteCollectionArgs, 'where'>>;
  deleteCurrency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<MutationDeleteCurrencyArgs, 'where'>>;
  deleteItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationDeleteItemArgs, 'where'>>;
  deleteManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyAssetsArgs>>;
  deleteManyAssetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, Partial<MutationDeleteManyAssetsConnectionArgs>>;
  deleteManyCartProducts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyCartProductsArgs>>;
  deleteManyCartProductsConnection?: Resolver<ResolversTypes['CartProductConnection'], ParentType, ContextType, Partial<MutationDeleteManyCartProductsConnectionArgs>>;
  deleteManyCarts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyCartsArgs>>;
  deleteManyCartsConnection?: Resolver<ResolversTypes['CartConnection'], ParentType, ContextType, Partial<MutationDeleteManyCartsConnectionArgs>>;
  deleteManyCategories?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyCategoriesArgs>>;
  deleteManyCategoriesConnection?: Resolver<ResolversTypes['CategoryConnection'], ParentType, ContextType, Partial<MutationDeleteManyCategoriesConnectionArgs>>;
  deleteManyCollections?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyCollectionsArgs>>;
  deleteManyCollectionsConnection?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, Partial<MutationDeleteManyCollectionsConnectionArgs>>;
  deleteManyCurrencies?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyCurrenciesArgs>>;
  deleteManyCurrenciesConnection?: Resolver<ResolversTypes['CurrencyConnection'], ParentType, ContextType, Partial<MutationDeleteManyCurrenciesConnectionArgs>>;
  deleteManyItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyItemsArgs>>;
  deleteManyItemsConnection?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, Partial<MutationDeleteManyItemsConnectionArgs>>;
  deleteManyOrderItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyOrderItemsArgs>>;
  deleteManyOrderItemsConnection?: Resolver<ResolversTypes['OrderItemConnection'], ParentType, ContextType, Partial<MutationDeleteManyOrderItemsConnectionArgs>>;
  deleteManyOrders?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyOrdersArgs>>;
  deleteManyOrdersConnection?: Resolver<ResolversTypes['OrderConnection'], ParentType, ContextType, Partial<MutationDeleteManyOrdersConnectionArgs>>;
  deleteManyProductItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyProductItemsArgs>>;
  deleteManyProductItemsConnection?: Resolver<ResolversTypes['ProductItemConnection'], ParentType, ContextType, Partial<MutationDeleteManyProductItemsConnectionArgs>>;
  deleteManyProducts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyProductsArgs>>;
  deleteManyProductsConnection?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, Partial<MutationDeleteManyProductsConnectionArgs>>;
  deleteManyReviews?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, Partial<MutationDeleteManyReviewsArgs>>;
  deleteManyReviewsConnection?: Resolver<ResolversTypes['ReviewConnection'], ParentType, ContextType, Partial<MutationDeleteManyReviewsConnectionArgs>>;
  deleteOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationDeleteOrderArgs, 'where'>>;
  deleteOrderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<MutationDeleteOrderItemArgs, 'where'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'where'>>;
  deleteProductItem?: Resolver<Maybe<ResolversTypes['ProductItem']>, ParentType, ContextType, RequireFields<MutationDeleteProductItemArgs, 'where'>>;
  deleteReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationDeleteReviewArgs, 'where'>>;
  deleteScheduledOperation?: Resolver<Maybe<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, RequireFields<MutationDeleteScheduledOperationArgs, 'where'>>;
  deleteScheduledRelease?: Resolver<Maybe<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, RequireFields<MutationDeleteScheduledReleaseArgs, 'where'>>;
  publishAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationPublishAssetArgs, 'publishBase' | 'to' | 'where' | 'withDefaultLocale'>>;
  publishCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationPublishCartArgs, 'to' | 'where'>>;
  publishCartProduct?: Resolver<Maybe<ResolversTypes['CartProduct']>, ParentType, ContextType, RequireFields<MutationPublishCartProductArgs, 'to' | 'where'>>;
  publishCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationPublishCategoryArgs, 'publishBase' | 'to' | 'where' | 'withDefaultLocale'>>;
  publishCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MutationPublishCollectionArgs, 'publishBase' | 'to' | 'where' | 'withDefaultLocale'>>;
  publishCurrency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<MutationPublishCurrencyArgs, 'to' | 'where'>>;
  publishItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationPublishItemArgs, 'to' | 'where'>>;
  publishManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyAssetsArgs, 'publishBase' | 'to' | 'withDefaultLocale'>>;
  publishManyAssetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<MutationPublishManyAssetsConnectionArgs, 'from' | 'publishBase' | 'to' | 'withDefaultLocale'>>;
  publishManyCartProducts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyCartProductsArgs, 'to'>>;
  publishManyCartProductsConnection?: Resolver<ResolversTypes['CartProductConnection'], ParentType, ContextType, RequireFields<MutationPublishManyCartProductsConnectionArgs, 'from' | 'to'>>;
  publishManyCarts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyCartsArgs, 'to'>>;
  publishManyCartsConnection?: Resolver<ResolversTypes['CartConnection'], ParentType, ContextType, RequireFields<MutationPublishManyCartsConnectionArgs, 'from' | 'to'>>;
  publishManyCategories?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyCategoriesArgs, 'publishBase' | 'to' | 'withDefaultLocale'>>;
  publishManyCategoriesConnection?: Resolver<ResolversTypes['CategoryConnection'], ParentType, ContextType, RequireFields<MutationPublishManyCategoriesConnectionArgs, 'from' | 'publishBase' | 'to' | 'withDefaultLocale'>>;
  publishManyCollections?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyCollectionsArgs, 'publishBase' | 'to' | 'withDefaultLocale'>>;
  publishManyCollectionsConnection?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<MutationPublishManyCollectionsConnectionArgs, 'from' | 'publishBase' | 'to' | 'withDefaultLocale'>>;
  publishManyCurrencies?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyCurrenciesArgs, 'to'>>;
  publishManyCurrenciesConnection?: Resolver<ResolversTypes['CurrencyConnection'], ParentType, ContextType, RequireFields<MutationPublishManyCurrenciesConnectionArgs, 'from' | 'to'>>;
  publishManyItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyItemsArgs, 'to'>>;
  publishManyItemsConnection?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<MutationPublishManyItemsConnectionArgs, 'from' | 'to'>>;
  publishManyOrderItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyOrderItemsArgs, 'to'>>;
  publishManyOrderItemsConnection?: Resolver<ResolversTypes['OrderItemConnection'], ParentType, ContextType, RequireFields<MutationPublishManyOrderItemsConnectionArgs, 'from' | 'to'>>;
  publishManyOrders?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyOrdersArgs, 'to'>>;
  publishManyOrdersConnection?: Resolver<ResolversTypes['OrderConnection'], ParentType, ContextType, RequireFields<MutationPublishManyOrdersConnectionArgs, 'from' | 'to'>>;
  publishManyProductItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyProductItemsArgs, 'to'>>;
  publishManyProductItemsConnection?: Resolver<ResolversTypes['ProductItemConnection'], ParentType, ContextType, RequireFields<MutationPublishManyProductItemsConnectionArgs, 'from' | 'to'>>;
  publishManyProducts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyProductsArgs, 'publishBase' | 'to' | 'withDefaultLocale'>>;
  publishManyProductsConnection?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<MutationPublishManyProductsConnectionArgs, 'from' | 'publishBase' | 'to' | 'withDefaultLocale'>>;
  publishManyReviews?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationPublishManyReviewsArgs, 'to'>>;
  publishManyReviewsConnection?: Resolver<ResolversTypes['ReviewConnection'], ParentType, ContextType, RequireFields<MutationPublishManyReviewsConnectionArgs, 'from' | 'to'>>;
  publishOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationPublishOrderArgs, 'to' | 'where'>>;
  publishOrderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<MutationPublishOrderItemArgs, 'to' | 'where'>>;
  publishProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationPublishProductArgs, 'publishBase' | 'to' | 'where' | 'withDefaultLocale'>>;
  publishProductItem?: Resolver<Maybe<ResolversTypes['ProductItem']>, ParentType, ContextType, RequireFields<MutationPublishProductItemArgs, 'to' | 'where'>>;
  publishReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationPublishReviewArgs, 'to' | 'where'>>;
  schedulePublishAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationSchedulePublishAssetArgs, 'publishBase' | 'to' | 'where' | 'withDefaultLocale'>>;
  schedulePublishCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationSchedulePublishCartArgs, 'to' | 'where'>>;
  schedulePublishCartProduct?: Resolver<Maybe<ResolversTypes['CartProduct']>, ParentType, ContextType, RequireFields<MutationSchedulePublishCartProductArgs, 'to' | 'where'>>;
  schedulePublishCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationSchedulePublishCategoryArgs, 'publishBase' | 'to' | 'where' | 'withDefaultLocale'>>;
  schedulePublishCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MutationSchedulePublishCollectionArgs, 'publishBase' | 'to' | 'where' | 'withDefaultLocale'>>;
  schedulePublishCurrency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<MutationSchedulePublishCurrencyArgs, 'to' | 'where'>>;
  schedulePublishItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationSchedulePublishItemArgs, 'to' | 'where'>>;
  schedulePublishOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationSchedulePublishOrderArgs, 'to' | 'where'>>;
  schedulePublishOrderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<MutationSchedulePublishOrderItemArgs, 'to' | 'where'>>;
  schedulePublishProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationSchedulePublishProductArgs, 'publishBase' | 'to' | 'where' | 'withDefaultLocale'>>;
  schedulePublishProductItem?: Resolver<Maybe<ResolversTypes['ProductItem']>, ParentType, ContextType, RequireFields<MutationSchedulePublishProductItemArgs, 'to' | 'where'>>;
  schedulePublishReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationSchedulePublishReviewArgs, 'to' | 'where'>>;
  scheduleUnpublishAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishAssetArgs, 'from' | 'unpublishBase' | 'where'>>;
  scheduleUnpublishCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishCartArgs, 'from' | 'where'>>;
  scheduleUnpublishCartProduct?: Resolver<Maybe<ResolversTypes['CartProduct']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishCartProductArgs, 'from' | 'where'>>;
  scheduleUnpublishCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishCategoryArgs, 'from' | 'unpublishBase' | 'where'>>;
  scheduleUnpublishCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishCollectionArgs, 'from' | 'unpublishBase' | 'where'>>;
  scheduleUnpublishCurrency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishCurrencyArgs, 'from' | 'where'>>;
  scheduleUnpublishItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishItemArgs, 'from' | 'where'>>;
  scheduleUnpublishOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishOrderArgs, 'from' | 'where'>>;
  scheduleUnpublishOrderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishOrderItemArgs, 'from' | 'where'>>;
  scheduleUnpublishProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishProductArgs, 'from' | 'unpublishBase' | 'where'>>;
  scheduleUnpublishProductItem?: Resolver<Maybe<ResolversTypes['ProductItem']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishProductItemArgs, 'from' | 'where'>>;
  scheduleUnpublishReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationScheduleUnpublishReviewArgs, 'from' | 'where'>>;
  unpublishAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUnpublishAssetArgs, 'from' | 'unpublishBase' | 'where'>>;
  unpublishCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationUnpublishCartArgs, 'from' | 'where'>>;
  unpublishCartProduct?: Resolver<Maybe<ResolversTypes['CartProduct']>, ParentType, ContextType, RequireFields<MutationUnpublishCartProductArgs, 'from' | 'where'>>;
  unpublishCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUnpublishCategoryArgs, 'from' | 'unpublishBase' | 'where'>>;
  unpublishCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MutationUnpublishCollectionArgs, 'from' | 'unpublishBase' | 'where'>>;
  unpublishCurrency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<MutationUnpublishCurrencyArgs, 'from' | 'where'>>;
  unpublishItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationUnpublishItemArgs, 'from' | 'where'>>;
  unpublishManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyAssetsArgs, 'from' | 'unpublishBase'>>;
  unpublishManyAssetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyAssetsConnectionArgs, 'from' | 'stage' | 'unpublishBase'>>;
  unpublishManyCartProducts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyCartProductsArgs, 'from'>>;
  unpublishManyCartProductsConnection?: Resolver<ResolversTypes['CartProductConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyCartProductsConnectionArgs, 'from' | 'stage'>>;
  unpublishManyCarts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyCartsArgs, 'from'>>;
  unpublishManyCartsConnection?: Resolver<ResolversTypes['CartConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyCartsConnectionArgs, 'from' | 'stage'>>;
  unpublishManyCategories?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyCategoriesArgs, 'from' | 'unpublishBase'>>;
  unpublishManyCategoriesConnection?: Resolver<ResolversTypes['CategoryConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyCategoriesConnectionArgs, 'from' | 'stage' | 'unpublishBase'>>;
  unpublishManyCollections?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyCollectionsArgs, 'from' | 'unpublishBase'>>;
  unpublishManyCollectionsConnection?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyCollectionsConnectionArgs, 'from' | 'stage' | 'unpublishBase'>>;
  unpublishManyCurrencies?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyCurrenciesArgs, 'from'>>;
  unpublishManyCurrenciesConnection?: Resolver<ResolversTypes['CurrencyConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyCurrenciesConnectionArgs, 'from' | 'stage'>>;
  unpublishManyItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyItemsArgs, 'from'>>;
  unpublishManyItemsConnection?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyItemsConnectionArgs, 'from' | 'stage'>>;
  unpublishManyOrderItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyOrderItemsArgs, 'from'>>;
  unpublishManyOrderItemsConnection?: Resolver<ResolversTypes['OrderItemConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyOrderItemsConnectionArgs, 'from' | 'stage'>>;
  unpublishManyOrders?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyOrdersArgs, 'from'>>;
  unpublishManyOrdersConnection?: Resolver<ResolversTypes['OrderConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyOrdersConnectionArgs, 'from' | 'stage'>>;
  unpublishManyProductItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyProductItemsArgs, 'from'>>;
  unpublishManyProductItemsConnection?: Resolver<ResolversTypes['ProductItemConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyProductItemsConnectionArgs, 'from' | 'stage'>>;
  unpublishManyProducts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyProductsArgs, 'from' | 'unpublishBase'>>;
  unpublishManyProductsConnection?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyProductsConnectionArgs, 'from' | 'stage' | 'unpublishBase'>>;
  unpublishManyReviews?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUnpublishManyReviewsArgs, 'from'>>;
  unpublishManyReviewsConnection?: Resolver<ResolversTypes['ReviewConnection'], ParentType, ContextType, RequireFields<MutationUnpublishManyReviewsConnectionArgs, 'from' | 'stage'>>;
  unpublishOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationUnpublishOrderArgs, 'from' | 'where'>>;
  unpublishOrderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<MutationUnpublishOrderItemArgs, 'from' | 'where'>>;
  unpublishProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUnpublishProductArgs, 'from' | 'unpublishBase' | 'where'>>;
  unpublishProductItem?: Resolver<Maybe<ResolversTypes['ProductItem']>, ParentType, ContextType, RequireFields<MutationUnpublishProductItemArgs, 'from' | 'where'>>;
  unpublishReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationUnpublishReviewArgs, 'from' | 'where'>>;
  updateAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUpdateAssetArgs, 'data' | 'where'>>;
  updateCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationUpdateCartArgs, 'data' | 'where'>>;
  updateCartProduct?: Resolver<Maybe<ResolversTypes['CartProduct']>, ParentType, ContextType, RequireFields<MutationUpdateCartProductArgs, 'data' | 'where'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'data' | 'where'>>;
  updateCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MutationUpdateCollectionArgs, 'data' | 'where'>>;
  updateCurrency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<MutationUpdateCurrencyArgs, 'data' | 'where'>>;
  updateItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationUpdateItemArgs, 'data' | 'where'>>;
  updateManyAssets?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyAssetsArgs, 'data'>>;
  updateManyAssetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyAssetsConnectionArgs, 'data'>>;
  updateManyCartProducts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyCartProductsArgs, 'data'>>;
  updateManyCartProductsConnection?: Resolver<ResolversTypes['CartProductConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyCartProductsConnectionArgs, 'data'>>;
  updateManyCarts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyCartsArgs, 'data'>>;
  updateManyCartsConnection?: Resolver<ResolversTypes['CartConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyCartsConnectionArgs, 'data'>>;
  updateManyCategories?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyCategoriesArgs, 'data'>>;
  updateManyCategoriesConnection?: Resolver<ResolversTypes['CategoryConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyCategoriesConnectionArgs, 'data'>>;
  updateManyCollections?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyCollectionsArgs, 'data'>>;
  updateManyCollectionsConnection?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyCollectionsConnectionArgs, 'data'>>;
  updateManyCurrencies?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyCurrenciesArgs, 'data'>>;
  updateManyCurrenciesConnection?: Resolver<ResolversTypes['CurrencyConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyCurrenciesConnectionArgs, 'data'>>;
  updateManyItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyItemsArgs, 'data'>>;
  updateManyItemsConnection?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyItemsConnectionArgs, 'data'>>;
  updateManyOrderItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyOrderItemsArgs, 'data'>>;
  updateManyOrderItemsConnection?: Resolver<ResolversTypes['OrderItemConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyOrderItemsConnectionArgs, 'data'>>;
  updateManyOrders?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyOrdersArgs, 'data'>>;
  updateManyOrdersConnection?: Resolver<ResolversTypes['OrderConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyOrdersConnectionArgs, 'data'>>;
  updateManyProductItems?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyProductItemsArgs, 'data'>>;
  updateManyProductItemsConnection?: Resolver<ResolversTypes['ProductItemConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyProductItemsConnectionArgs, 'data'>>;
  updateManyProducts?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyProductsArgs, 'data'>>;
  updateManyProductsConnection?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyProductsConnectionArgs, 'data'>>;
  updateManyReviews?: Resolver<ResolversTypes['BatchPayload'], ParentType, ContextType, RequireFields<MutationUpdateManyReviewsArgs, 'data'>>;
  updateManyReviewsConnection?: Resolver<ResolversTypes['ReviewConnection'], ParentType, ContextType, RequireFields<MutationUpdateManyReviewsConnectionArgs, 'data'>>;
  updateOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, 'data' | 'where'>>;
  updateOrderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<MutationUpdateOrderItemArgs, 'data' | 'where'>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'data' | 'where'>>;
  updateProductItem?: Resolver<Maybe<ResolversTypes['ProductItem']>, ParentType, ContextType, RequireFields<MutationUpdateProductItemArgs, 'data' | 'where'>>;
  updateReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationUpdateReviewArgs, 'data' | 'where'>>;
  updateScheduledRelease?: Resolver<Maybe<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, RequireFields<MutationUpdateScheduledReleaseArgs, 'data' | 'where'>>;
  upsertAsset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<MutationUpsertAssetArgs, 'upsert' | 'where'>>;
  upsertCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<MutationUpsertCartArgs, 'upsert' | 'where'>>;
  upsertCartProduct?: Resolver<Maybe<ResolversTypes['CartProduct']>, ParentType, ContextType, RequireFields<MutationUpsertCartProductArgs, 'upsert' | 'where'>>;
  upsertCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpsertCategoryArgs, 'upsert' | 'where'>>;
  upsertCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<MutationUpsertCollectionArgs, 'upsert' | 'where'>>;
  upsertCurrency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<MutationUpsertCurrencyArgs, 'upsert' | 'where'>>;
  upsertItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<MutationUpsertItemArgs, 'upsert' | 'where'>>;
  upsertOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationUpsertOrderArgs, 'upsert' | 'where'>>;
  upsertOrderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<MutationUpsertOrderItemArgs, 'upsert' | 'where'>>;
  upsertProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpsertProductArgs, 'upsert' | 'where'>>;
  upsertProductItem?: Resolver<Maybe<ResolversTypes['ProductItem']>, ParentType, ContextType, RequireFields<MutationUpsertProductItemArgs, 'upsert' | 'where'>>;
  upsertReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationUpsertReviewArgs, 'upsert' | 'where'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Asset' | 'Cart' | 'CartProduct' | 'Category' | 'Collection' | 'Currency' | 'Item' | 'Order' | 'OrderItem' | 'Product' | 'ProductItem' | 'Review' | 'ScheduledOperation' | 'ScheduledRelease' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<OrderCreatedByArgs>>;
  documentInStages?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<OrderDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<OrderHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orderItems?: Resolver<Array<ResolversTypes['OrderItem']>, ParentType, ContextType, Partial<OrderOrderItemsArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<OrderPublishedByArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<OrderScheduledInArgs>>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  stripeCheckoutId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<OrderUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderConnection'] = ResolversParentTypes['OrderConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['OrderEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderEdge'] = ResolversParentTypes['OrderEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<OrderItemCreatedByArgs>>;
  documentInStages?: Resolver<Array<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<OrderItemDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<OrderItemHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, Partial<OrderItemOrderArgs>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<OrderItemProductArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<OrderItemPublishedByArgs>>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<OrderItemScheduledInArgs>>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<OrderItemUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderItemConnection'] = ResolversParentTypes['OrderItemConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['OrderItemEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderItemEdge'] = ResolversParentTypes['OrderItemEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['OrderItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  cartProduct?: Resolver<Maybe<ResolversTypes['CartProduct']>, ParentType, ContextType, Partial<ProductCartProductArgs>>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, Partial<ProductCategoriesArgs>>;
  cents?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, Partial<ProductCollectionsArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<ProductCreatedAtArgs, 'variation'>>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ProductCreatedByArgs>>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description_long?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<ProductDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<ProductHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['Asset'], ParentType, ContextType, Partial<ProductImageArgs>>;
  images?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, Partial<ProductImagesArgs>>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localizations?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<ProductLocalizationsArgs, 'includeCurrent' | 'locales'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderItems?: Resolver<Array<ResolversTypes['OrderItem']>, ParentType, ContextType, Partial<ProductOrderItemsArgs>>;
  productItems?: Resolver<Array<ResolversTypes['ProductItem']>, ParentType, ContextType, Partial<ProductProductItemsArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<ProductPublishedAtArgs, 'variation'>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ProductPublishedByArgs>>;
  reviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType, Partial<ProductReviewsArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<ProductScheduledInArgs>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<ProductUpdatedAtArgs, 'variation'>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ProductUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductConnection'] = ResolversParentTypes['ProductConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ProductEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductEdge'] = ResolversParentTypes['ProductEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductItem'] = ResolversParentTypes['ProductItem']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ProductItemCreatedByArgs>>;
  documentInStages?: Resolver<Array<ResolversTypes['ProductItem']>, ParentType, ContextType, RequireFields<ProductItemDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<ProductItemHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, Partial<ProductItemItemArgs>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<ProductItemProductArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ProductItemPublishedByArgs>>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<ProductItemScheduledInArgs>>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ProductItemUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductItemConnection'] = ResolversParentTypes['ProductItemConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ProductItemEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductItemEdge'] = ResolversParentTypes['ProductItemEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ProductItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetArgs, 'locales' | 'stage' | 'where'>>;
  assetVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryAssetVersionArgs, 'where'>>;
  assets?: Resolver<Array<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryAssetsArgs, 'locales' | 'stage'>>;
  assetsConnection?: Resolver<ResolversTypes['AssetConnection'], ParentType, ContextType, RequireFields<QueryAssetsConnectionArgs, 'locales' | 'stage'>>;
  cart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartArgs, 'locales' | 'stage' | 'where'>>;
  cartProduct?: Resolver<Maybe<ResolversTypes['CartProduct']>, ParentType, ContextType, RequireFields<QueryCartProductArgs, 'locales' | 'stage' | 'where'>>;
  cartProductVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryCartProductVersionArgs, 'where'>>;
  cartProducts?: Resolver<Array<ResolversTypes['CartProduct']>, ParentType, ContextType, RequireFields<QueryCartProductsArgs, 'locales' | 'stage'>>;
  cartProductsConnection?: Resolver<ResolversTypes['CartProductConnection'], ParentType, ContextType, RequireFields<QueryCartProductsConnectionArgs, 'locales' | 'stage'>>;
  cartVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryCartVersionArgs, 'where'>>;
  carts?: Resolver<Array<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryCartsArgs, 'locales' | 'stage'>>;
  cartsConnection?: Resolver<ResolversTypes['CartConnection'], ParentType, ContextType, RequireFields<QueryCartsConnectionArgs, 'locales' | 'stage'>>;
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoriesArgs, 'locales' | 'stage'>>;
  categoriesConnection?: Resolver<ResolversTypes['CategoryConnection'], ParentType, ContextType, RequireFields<QueryCategoriesConnectionArgs, 'locales' | 'stage'>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'locales' | 'stage' | 'where'>>;
  categoryVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryCategoryVersionArgs, 'where'>>;
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QueryCollectionArgs, 'locales' | 'stage' | 'where'>>;
  collectionVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryCollectionVersionArgs, 'where'>>;
  collections?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<QueryCollectionsArgs, 'locales' | 'stage'>>;
  collectionsConnection?: Resolver<ResolversTypes['CollectionConnection'], ParentType, ContextType, RequireFields<QueryCollectionsConnectionArgs, 'locales' | 'stage'>>;
  currencies?: Resolver<Array<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<QueryCurrenciesArgs, 'locales' | 'stage'>>;
  currenciesConnection?: Resolver<ResolversTypes['CurrencyConnection'], ParentType, ContextType, RequireFields<QueryCurrenciesConnectionArgs, 'locales' | 'stage'>>;
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<QueryCurrencyArgs, 'locales' | 'stage' | 'where'>>;
  currencyVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryCurrencyVersionArgs, 'where'>>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemArgs, 'locales' | 'stage' | 'where'>>;
  itemVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryItemVersionArgs, 'where'>>;
  items?: Resolver<Array<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemsArgs, 'locales' | 'stage'>>;
  itemsConnection?: Resolver<ResolversTypes['ItemConnection'], ParentType, ContextType, RequireFields<QueryItemsConnectionArgs, 'locales' | 'stage'>>;
  node?: Resolver<Maybe<ResolversTypes['Node']>, ParentType, ContextType, RequireFields<QueryNodeArgs, 'id' | 'locales' | 'stage'>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'locales' | 'stage' | 'where'>>;
  orderItem?: Resolver<Maybe<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<QueryOrderItemArgs, 'locales' | 'stage' | 'where'>>;
  orderItemVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryOrderItemVersionArgs, 'where'>>;
  orderItems?: Resolver<Array<ResolversTypes['OrderItem']>, ParentType, ContextType, RequireFields<QueryOrderItemsArgs, 'locales' | 'stage'>>;
  orderItemsConnection?: Resolver<ResolversTypes['OrderItemConnection'], ParentType, ContextType, RequireFields<QueryOrderItemsConnectionArgs, 'locales' | 'stage'>>;
  orderVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryOrderVersionArgs, 'where'>>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrdersArgs, 'locales' | 'stage'>>;
  ordersConnection?: Resolver<ResolversTypes['OrderConnection'], ParentType, ContextType, RequireFields<QueryOrdersConnectionArgs, 'locales' | 'stage'>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'locales' | 'stage' | 'where'>>;
  productItem?: Resolver<Maybe<ResolversTypes['ProductItem']>, ParentType, ContextType, RequireFields<QueryProductItemArgs, 'locales' | 'stage' | 'where'>>;
  productItemVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryProductItemVersionArgs, 'where'>>;
  productItems?: Resolver<Array<ResolversTypes['ProductItem']>, ParentType, ContextType, RequireFields<QueryProductItemsArgs, 'locales' | 'stage'>>;
  productItemsConnection?: Resolver<ResolversTypes['ProductItemConnection'], ParentType, ContextType, RequireFields<QueryProductItemsConnectionArgs, 'locales' | 'stage'>>;
  productVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryProductVersionArgs, 'where'>>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductsArgs, 'locales' | 'stage'>>;
  productsConnection?: Resolver<ResolversTypes['ProductConnection'], ParentType, ContextType, RequireFields<QueryProductsConnectionArgs, 'locales' | 'stage'>>;
  review?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryReviewArgs, 'locales' | 'stage' | 'where'>>;
  reviewVersion?: Resolver<Maybe<ResolversTypes['DocumentVersion']>, ParentType, ContextType, RequireFields<QueryReviewVersionArgs, 'where'>>;
  reviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryReviewsArgs, 'locales' | 'stage'>>;
  reviewsConnection?: Resolver<ResolversTypes['ReviewConnection'], ParentType, ContextType, RequireFields<QueryReviewsConnectionArgs, 'locales' | 'stage'>>;
  scheduledOperation?: Resolver<Maybe<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, RequireFields<QueryScheduledOperationArgs, 'locales' | 'stage' | 'where'>>;
  scheduledOperations?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, RequireFields<QueryScheduledOperationsArgs, 'locales' | 'stage'>>;
  scheduledOperationsConnection?: Resolver<ResolversTypes['ScheduledOperationConnection'], ParentType, ContextType, RequireFields<QueryScheduledOperationsConnectionArgs, 'locales' | 'stage'>>;
  scheduledRelease?: Resolver<Maybe<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, RequireFields<QueryScheduledReleaseArgs, 'locales' | 'stage' | 'where'>>;
  scheduledReleases?: Resolver<Array<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, RequireFields<QueryScheduledReleasesArgs, 'locales' | 'stage'>>;
  scheduledReleasesConnection?: Resolver<ResolversTypes['ScheduledReleaseConnection'], ParentType, ContextType, RequireFields<QueryScheduledReleasesConnectionArgs, 'locales' | 'stage'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'locales' | 'stage' | 'where'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersArgs, 'locales' | 'stage'>>;
  usersConnection?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, RequireFields<QueryUsersConnectionArgs, 'locales' | 'stage'>>;
};

export type RgbaResolvers<ContextType = any, ParentType extends ResolversParentTypes['RGBA'] = ResolversParentTypes['RGBA']> = {
  a?: Resolver<ResolversTypes['RGBATransparency'], ParentType, ContextType>;
  b?: Resolver<ResolversTypes['RGBAHue'], ParentType, ContextType>;
  g?: Resolver<ResolversTypes['RGBAHue'], ParentType, ContextType>;
  r?: Resolver<ResolversTypes['RGBAHue'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RgbaHueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBAHue'], any> {
  name: 'RGBAHue';
}

export interface RgbaTransparencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBATransparency'], any> {
  name: 'RGBATransparency';
}

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ReviewCreatedByArgs>>;
  documentInStages?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<ReviewDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  headline?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  history?: Resolver<Array<ResolversTypes['Version']>, ParentType, ContextType, RequireFields<ReviewHistoryArgs, 'limit' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<ReviewProductArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ReviewPublishedByArgs>>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  scheduledIn?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<ReviewScheduledInArgs>>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ReviewUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewConnection'] = ResolversParentTypes['ReviewConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ReviewEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewEdge'] = ResolversParentTypes['ReviewEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Review'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes['RichText'] = ResolversParentTypes['RichText']> = {
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  raw?: Resolver<ResolversTypes['RichTextAST'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RichTextAstScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RichTextAST'], any> {
  name: 'RichTextAST';
}

export type ScheduledOperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledOperation'] = ResolversParentTypes['ScheduledOperation']> = {
  affectedDocuments?: Resolver<Array<ResolversTypes['ScheduledOperationAffectedDocument']>, ParentType, ContextType, Partial<ScheduledOperationAffectedDocumentsArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ScheduledOperationCreatedByArgs>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, RequireFields<ScheduledOperationDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ScheduledOperationPublishedByArgs>>;
  rawPayload?: Resolver<ResolversTypes['Json'], ParentType, ContextType>;
  release?: Resolver<Maybe<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, Partial<ScheduledOperationReleaseArgs>>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ScheduledOperationStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ScheduledOperationUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduledOperationAffectedDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledOperationAffectedDocument'] = ResolversParentTypes['ScheduledOperationAffectedDocument']> = {
  __resolveType: TypeResolveFn<'Asset' | 'Cart' | 'CartProduct' | 'Category' | 'Collection' | 'Currency' | 'Item' | 'Order' | 'OrderItem' | 'Product' | 'ProductItem' | 'Review', ParentType, ContextType>;
};

export type ScheduledOperationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledOperationConnection'] = ResolversParentTypes['ScheduledOperationConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ScheduledOperationEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduledOperationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledOperationEdge'] = ResolversParentTypes['ScheduledOperationEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ScheduledOperation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduledReleaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledRelease'] = ResolversParentTypes['ScheduledRelease']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ScheduledReleaseCreatedByArgs>>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['ScheduledRelease']>, ParentType, ContextType, RequireFields<ScheduledReleaseDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isImplicit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  operations?: Resolver<Array<ResolversTypes['ScheduledOperation']>, ParentType, ContextType, Partial<ScheduledReleaseOperationsArgs>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  publishedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ScheduledReleasePublishedByArgs>>;
  releaseAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ScheduledReleaseStatus'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<ScheduledReleaseUpdatedByArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduledReleaseConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledReleaseConnection'] = ResolversParentTypes['ScheduledReleaseConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ScheduledReleaseEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScheduledReleaseEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScheduledReleaseEdge'] = ResolversParentTypes['ScheduledReleaseEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['ScheduledRelease'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<UserDocumentInStagesArgs, 'includeCurrent' | 'inheritLocale' | 'stages'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['UserKind'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  aggregate?: Resolver<ResolversTypes['Aggregate'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VersionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Version'] = ResolversParentTypes['Version']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['Stage'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Aggregate?: AggregateResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  AssetConnection?: AssetConnectionResolvers<ContextType>;
  AssetEdge?: AssetEdgeResolvers<ContextType>;
  BatchPayload?: BatchPayloadResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  CartConnection?: CartConnectionResolvers<ContextType>;
  CartEdge?: CartEdgeResolvers<ContextType>;
  CartProduct?: CartProductResolvers<ContextType>;
  CartProductConnection?: CartProductConnectionResolvers<ContextType>;
  CartProductEdge?: CartProductEdgeResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryConnection?: CategoryConnectionResolvers<ContextType>;
  CategoryEdge?: CategoryEdgeResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionConnection?: CollectionConnectionResolvers<ContextType>;
  CollectionEdge?: CollectionEdgeResolvers<ContextType>;
  Color?: ColorResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  CurrencyConnection?: CurrencyConnectionResolvers<ContextType>;
  CurrencyEdge?: CurrencyEdgeResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DocumentVersion?: DocumentVersionResolvers<ContextType>;
  Hex?: GraphQLScalarType;
  Item?: ItemResolvers<ContextType>;
  ItemConnection?: ItemConnectionResolvers<ContextType>;
  ItemEdge?: ItemEdgeResolvers<ContextType>;
  Json?: GraphQLScalarType;
  Location?: LocationResolvers<ContextType>;
  Long?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderConnection?: OrderConnectionResolvers<ContextType>;
  OrderEdge?: OrderEdgeResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  OrderItemConnection?: OrderItemConnectionResolvers<ContextType>;
  OrderItemEdge?: OrderItemEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductConnection?: ProductConnectionResolvers<ContextType>;
  ProductEdge?: ProductEdgeResolvers<ContextType>;
  ProductItem?: ProductItemResolvers<ContextType>;
  ProductItemConnection?: ProductItemConnectionResolvers<ContextType>;
  ProductItemEdge?: ProductItemEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RGBA?: RgbaResolvers<ContextType>;
  RGBAHue?: GraphQLScalarType;
  RGBATransparency?: GraphQLScalarType;
  Review?: ReviewResolvers<ContextType>;
  ReviewConnection?: ReviewConnectionResolvers<ContextType>;
  ReviewEdge?: ReviewEdgeResolvers<ContextType>;
  RichText?: RichTextResolvers<ContextType>;
  RichTextAST?: GraphQLScalarType;
  ScheduledOperation?: ScheduledOperationResolvers<ContextType>;
  ScheduledOperationAffectedDocument?: ScheduledOperationAffectedDocumentResolvers<ContextType>;
  ScheduledOperationConnection?: ScheduledOperationConnectionResolvers<ContextType>;
  ScheduledOperationEdge?: ScheduledOperationEdgeResolvers<ContextType>;
  ScheduledRelease?: ScheduledReleaseResolvers<ContextType>;
  ScheduledReleaseConnection?: ScheduledReleaseConnectionResolvers<ContextType>;
  ScheduledReleaseEdge?: ScheduledReleaseEdgeResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  Version?: VersionResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  defaultOverride?: DefaultOverrideDirectiveResolver<any, any, ContextType>;
  mark?: MarkDirectiveResolver<any, any, ContextType>;
  permission?: PermissionDirectiveResolver<any, any, ContextType>;
  psql?: PsqlDirectiveResolver<any, any, ContextType>;
  remote?: RemoteDirectiveResolver<any, any, ContextType>;
};

import { IPaginatedResult } from '_shared/pagination/types';
import { TSong } from '_shared/song/types';

import { TSongForm } from './form';

export type TSongPostRequest = TSongForm;
export type TSongPostResponse = TSong;

export type TSongsGetResponse = IPaginatedResult<TSong>;
export type TSongGetResponse = TSong;

export type TSongPutRequest = TSongForm;
export type TSongPutResponse = TSong;

export type TSongDeleteResponse = TSong;

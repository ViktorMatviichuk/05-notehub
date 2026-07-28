export type NoteTag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';

export interface Note {
  _id: string;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt?: string;
  updatedAt?: string;
}

export interface FetchNotesResponse {
  data: Note[];
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
}

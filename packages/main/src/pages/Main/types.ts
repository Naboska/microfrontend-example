type TPostContent = {
  protected: boolean;
  rendered: string;
}
export type TPost = {
  link: string;
  id: number
  author: number;
  categories: number[];
  comment_status: string;
  content: TPostContent;
  date: string;
  date_gmt: string;
  excerpt: TPostContent;
  featured_media: number;
  format: string;
  guid: Pick<TPostContent, 'rendered'>;
  meta: any[];
  modified: string;
  modified_gmt: string;
  ping_status: string;
  slug: string;
  status: string;
  sticky: boolean;
  tags: any[];
  template: string
  title: Pick<TPostContent, 'rendered'>;
  type: string
}
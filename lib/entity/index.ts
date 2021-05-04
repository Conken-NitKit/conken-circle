export interface User {
  id: string; // ID
  mail: string; // メアド
  name: string; // 名前
  biography: string; // 説明文
  iconImage?: string; // アイコン画像
  follows: string[]; // userIdのリスト
  followers: string[]; // userIdのリスト
  userListIds: string[]; // userListIdのリスト
  bookMarks: string[]; // ブックマークしたレビューのID
}

export interface UserList {
  id: string; // ID
  ownerId: string; // 作成者のID
  menberIds: string[]; // userIdのリスト
}

export interface Review {
  id: string; // userID
  itemName: string; // 商品名
  timestamp: string; // 投稿日時
  price: number; // 値段
  link: string; // アクセスリンク
  imageUrl: string; // 画像
  review: string; // レビュー文
  point: number; // 評価値
  category: string; // カテゴリ
  sales: {
    title: string;
    start: string;
    end: string;
  }[]; // セール期間
  listId?: string[]; // 公開するリスト
}

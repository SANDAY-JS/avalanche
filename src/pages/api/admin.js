import { db } from "../../../firebase";

export default async function handler(req, res) {
  const updateBlogDraft = async (draft) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    return await db
      .collection("blog")
      .doc("content")
      .set({
        title: draft.title,
        contents: draft.contents,
        date: year + "年" + month + "月" + day + "日",
      });
  };

  if (req.method === "POST") {
    const draft = req.body.blogInput;
    console.log(draft);

    try {
      await updateBlogDraft(draft);
    } catch (e) {
      console.error("下書きを保存できませんでした", e);
    }
  }
}

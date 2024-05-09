"use server";

export async function createTopic(formData: FormData) {
  //Todo: revalidate the home page whenever a topic is created
  const name = formData.get("name");
  const description = formData.get("description");

  console.log(name, description);
}

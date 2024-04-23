"use server";
import { getData } from "@/service/todo";
import { Card } from "./_components/card";

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <div>
      {data.map((todo) => (
        <Card key={todo.id} {...todo} />
      ))}
    </div>
  );
}

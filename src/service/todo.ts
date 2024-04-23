import { TodoData } from "@/types/todo";
import { revalidatePath } from "next/cache";

const getData = async (): Promise<TodoData[]> => {
  try {
    const res = await fetch("http://localhost:3600/todos");
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const deleteBt = async (id: number): Promise<{}> => {
  try {
    const res = await fetch(`http://localhost:3600/todos/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    revalidatePath("todos");
    return data;
  } catch (error) {
    throw new Error("error");
  }
};

export { getData, deleteBt };

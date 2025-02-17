import { teacherService } from "@/services/TeacherService";
import { TeacherType } from "@/types";
import { useQuery } from "react-query";

const useTeachers = () => {
  return useQuery<TeacherType[]>("teachers", teacherService.getAll);
};

export { useTeachers };

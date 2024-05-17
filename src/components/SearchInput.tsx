"use client";
import { useSearchParams } from "next/navigation";
import { Input } from "@nextui-org/react";
import * as actions from "@/actions";
interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = () => {
  const searchParams = useSearchParams();

  return (
    <form action={actions.search}>
      <Input name="term" defaultValue={searchParams.get("term") || ""} />
    </form>
  );
};

export default SearchInput;

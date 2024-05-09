import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import * as actions from "@/actions";

interface TopicCreateFormProps {}

const TopicCreateForm: React.FC<TopicCreateFormProps> = () => {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createTopic}>
          <div className="flex flex-col p-4 gap-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input label="Name" labelPlacement="outside" placeholder="Name" name="name"/>
            <Textarea
              label="Description"
              labelPlacement="outside"
              placeholder="Describe your Topic"
              name="description"
            />
            <Button variant="flat" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default TopicCreateForm;

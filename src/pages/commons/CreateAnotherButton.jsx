import { SaveButton, Toolbar, useNotify } from "react-admin";
import { useFormContext } from "react-hook-form";

const CreateAnotherButton = () => {
  const notify = useNotify();
  const { reset } = useFormContext();

  return (
    <Toolbar>
      <SaveButton
        type="button"
        label="Save & Create Another"
        variant="text"
        mutationOptions={{
          onSuccess: () => {
            reset();
            window.scrollTo(0, 0);
            notify("ra.notification.created", {
              type: "info",
              messageArgs: { smart_count: 1 },
            });
          },
        }}
      />
    </Toolbar>
  );
};

export default CreateAnotherButton;

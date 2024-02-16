import React from "react";
import { Input, Form, FormRow, Button, FileInput, TextArea } from "../../ui";
import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin.js";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  
  const isWorking = isCreating || isEditing;

  // putting prev. values in edit-form 
  const { id: editId, ...editedValues } = cabinToEdit;
  const isEditedSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditedSession ? editedValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const newImage = (typeof(data.image) === "string") ? data.image : data.image[0];

    isEditedSession
      ? editCabin({ newCabinData: { ...data, image: newImage }, id: editId }, { onSuccess: (data) => reset() })
      : createCabin({ ...data, image: newImage }, { onSuccess: (data) => reset() });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        disabled={isWorking}
      // error={errors?.description?.message}
      >
        <TextArea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          { ...register("image", {
            required: isEditedSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="danger" type="reset">Cancel</Button>
        <Button variation="success" disabled={isWorking}>{isEditedSession ? 'Save' : 'Add cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;

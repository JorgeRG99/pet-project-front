import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PET_VALIDATION_MESSAGES } from "@/configs/validation-config";
import { useExternalPets } from "@/hooks/useExternalPets";
import { usePetValidation } from "@/hooks/usePetValidation";
import { Validator } from "@/utils/utility-classes/user-data-validator";
import { removeUndefinedKeys } from "@/utils/utility-functions/removeUndefinedKeys";
import { useState } from "react";

export default function EditYourPetDialog({ pet, setPets }) {
  const [open, setOpen] = useState(false);
  const { petUpdate } = useExternalPets();
  const [validationMessages, setValidationMessages] = useState({});
  const { validatePetUpdate } = usePetValidation();
  const [hasAnyValueChanged, setHasAnyValueChanged] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    weight: pet.weight.replace(" kg", ""),
    additionalInfo: pet.additional_info,
  });

  const handleChange = (e) => {
    setHasAnyValueChanged(true);
    setUpdatedData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (hasAnyValueChanged) {
      const validationResult = validatePetUpdate(updatedData);
      const hasAnyError = Object.values(validationResult).some(
        (value) => value === false
      );

      if (hasAnyError) {
        const errorMessages = Validator.getValidationMessages(
          validationResult,
          PET_VALIDATION_MESSAGES
        );
        setValidationMessages(errorMessages);
        return;
      } else {
        const cleanUpdatedData = removeUndefinedKeys(updatedData);

        await petUpdate(cleanUpdatedData, setPets, pet.id);
        setOpen(false);
        setValidationMessages({});
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-white bg-primary-dark hover:opacity-75 transition duration-200 w-full active:scale-95">
          Editar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[500px] w-[90%] bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center xs:text-2xl text-xl">
            Editar información de mascota
          </DialogTitle>
        </DialogHeader>
        <div className="py-8 text-[1em] space-y-6">
          <div>
            <Label htmlFor="weight">Peso de la mascota</Label>
            <Input
              type="text"
              name="weight"
              placeholder="Introduce el peso de la mascota"
              className="mt-2 mb-4 py-5"
              onChange={handleChange}
              value={updatedData?.weight}
              error={validationMessages?.weight}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="additionalInfo">Información adicional</Label>
            <Textarea
              onChange={handleChange}
              name="additionalInfo"
              className="h-40"
              value={updatedData?.additionalInfo}
              error={validationMessages?.additionalInfo}
            />
          </div>
        </div>
        <DialogFooter className="flex flex-row items-center sm:justify-evenly justify-evenly w-full">
          <DialogTrigger asChild>
            <Button className="text-white hover:opacity-75 transition duration-200 bg-destructive">
              Cerrar
            </Button>
          </DialogTrigger>
          <Button
            onClick={handleSubmit}
            className="text-white hover:opacity-75 transition duration-200 bg-primary-dark"
          >
            Actualizar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

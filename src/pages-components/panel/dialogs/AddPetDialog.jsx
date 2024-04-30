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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PET_VALIDATION_MESSAGES } from "@/configs/validation-config";
import { useBreeds } from "@/hooks/useBreeds";
import { usePetValidation } from "@/hooks/usePetValidation";
import { usePets } from "@/hooks/usePets";
import { Validator } from "@/utils/utility-classes/user-data-validator";
import { actualFormattedDate } from "@/utils/utility-functions/actualFormattedDate";
import { convertKeysToSnakeCase } from "@/utils/utility-functions/fetchKeysFormat";
import { useState } from "react";

export default function AddPetDialog({ setPets }) {
  const [petData, setPetData] = useState({
    id: crypto.randomUUID(),
    name: "",
    additionalInfo: "",
    weight: "",
    breedId: "",
    gender: "",
    dateEntry: actualFormattedDate(),
    age: 2,
  });
  const { breeds } = useBreeds();
  const [validationMessages, setValidationMessages] = useState({});
  const { validatePetRegister } = usePetValidation();
  const [open, setOpen] = useState(false);
  const { petRegister } = usePets();
  const allFieldsHasValue = Object.values(petData).every(
    (value) => value !== ""
  );

  const handleChange = (e) => {
    setPetData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBreedChange = (value) =>
    setPetData((prevState) => ({ ...prevState, breedId: value }));
  const handleGenderChange = (value) =>
    setPetData((prevState) => ({ ...prevState, gender: value }));

  const handleSubmit = async () => {
    const validationResult = validatePetRegister(petData);
    console.log(validationResult);
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
      setValidationMessages(null);
      const formattedRegisterData = convertKeysToSnakeCase(petData);
      await petRegister(formattedRegisterData, setPets);
      setOpen(false);
      setPetData({
        id: "",
        name: "",
        additionalInfo: "",
        weight: "",
        breedId: "",
        gender: "",
        dateEntry: "",
        age: 2,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-white bg-primary-dark hover:opacity-75 transition duration-200 w-[10em]">
          Añadir mascota
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-[500px] w-[90%] bg-white rounded-lg flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center xs:text-2xl text-xl w-full">
            Editar información de mascota
          </DialogTitle>
        </DialogHeader>
        <div className="py-8 text-[1em] space-y-6 max-w-full">
          <div className="w-full">
            <Label htmlFor="name">Nombre</Label>
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Introduce el nombre de la mascota"
              className="mt-2 mb-4 py-5 w-full"
              error={validationMessages?.name}
            />
          </div>
          <div>
            <Label htmlFor="age">Edad</Label>
            <Input
              type="number"
              name="age"
              onChange={handleChange}
              placeholder="Introduce la edad de la mascota"
              className="mt-2 mb-4 py-5"
              value={petData.age}
              error={validationMessages?.age}
            />
          </div>
          <div className="flex justify-between w-full">
            <div className="w-[47%] space-y-2">
              <Label htmlFor="age">Género</Label>
              <Select onValueChange={handleGenderChange} name="gender">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un género" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Macho</SelectItem>
                    <SelectItem value="female">Hembra</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-[47%] space-y-2">
              <Select onValueChange={handleBreedChange} name="breed">
                <Label htmlFor="breed">Raza</Label>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona una raza" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {breeds?.map((breed) => (
                      <SelectItem key={crypto.randomUUID()} value={breed.id}>
                        {breed.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="weight">Peso de la mascota (kg)</Label>
            <Input
              type="text"
              name="weight"
              onChange={handleChange}
              placeholder="Introduce el peso de la mascota"
              className="mt-2 mb-4 py-5"
              error={validationMessages?.weight}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="additionalInfo">Información adicional</Label>
            <Textarea
              onChange={handleChange}
              name="additionalInfo"
              className="h-32"
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
            disabled={!allFieldsHasValue}
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

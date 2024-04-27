import DeleteAccountDialog from "./dialogs/DeleteAccountDialog";
import EditProfileOptionsDialog from "./dialogs/EditProfileOptionsDialog";

export default function ProfileOperations() {
  return (
    <div className="flex gap-8">
      <EditProfileOptionsDialog />
      <DeleteAccountDialog />
    </div>
  );
}

import Input from "../Input";

interface InputNameProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

export const InputName: React.FC<InputNameProps> = ({name,setName,setError}) => {
  return (
    <Input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError('');
        }}
      />
  )
}

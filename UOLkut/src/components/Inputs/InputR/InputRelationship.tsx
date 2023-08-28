import styles from "./styles.module.css"

interface InputRelationshipProps {
  relationship: string;
    setRelationship: React.Dispatch<React.SetStateAction<string>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

export const InputRelationship: React.FC<InputRelationshipProps> = ({relationship,setRelationship,setError}) => {
  return (
    <select
          className={styles.inputRel}
          value={relationship}
          onChange={(e) => [setRelationship(e.target.value), setError("")]}
        >
          <option value="">Relacionamento</option>
          <option value="Solteiro">Solteiro(a)</option>
          <option value="Casado">Casado(a)</option>
          <option value="Divorciado">Divorciado(a)</option>
          <option value="Namorando">Namorando(a)</option>
          <option value="Preocupado">Preocupado(a)</option>
        </select>
      
  )
}

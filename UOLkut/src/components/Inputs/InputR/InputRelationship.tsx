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
          <option value="solteiro">Solteiro</option>
          <option value="casado">Casado</option>
          <option value="divorciado">Divorciado</option>
          <option value="namorando">Namorando</option>
          <option value="preocupado">Preocupado</option>
        </select>
      
  )
}

import Input from "../Input";

interface EmailProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

export const EmailInput: React.FC<EmailProps> = ({ email, setEmail, setError }) => {
    return (
        <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
        />
    );
};
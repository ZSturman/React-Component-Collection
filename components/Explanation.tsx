type ExplanationProps = {
  children: React.ReactNode;
}

const Explanation: React.FC<ExplanationProps> = ({ children }) => {
    return (
        <div className="prose">
            {children}
        </div>
    )
}

export default Explanation

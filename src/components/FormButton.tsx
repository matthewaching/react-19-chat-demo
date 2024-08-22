type Props = {
    handleSubmit: (event: React.MouseEvent) => void;
};

const FormButton = ({ handleSubmit }: Props) => {
    return (
        <button type='submit' onClick={handleSubmit}>
            <i className='ri-send-plane-2-fill' />
            {/* <i className='ri-loader-2-line' /> */}
        </button>
    );
};

export default FormButton;
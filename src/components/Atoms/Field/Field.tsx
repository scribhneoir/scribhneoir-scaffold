import { IoIosWarning } from 'react-icons/io';

import Text from '../Text';
import { FieldProps } from './Field.models';
const Field = (props: FieldProps) => {
  const { onChange, value, placeholder, disabled, error, type } = props;
  return (
    <div className='container flex flex-col'>
      <input
        className={`w-full my-2 ${
          error
            ? 'text-red-500 border-red-400'
            : 'text-slate-500 border-slate-100'
        } font-weight-bold border-2 border-slate-100 p-2 rounded-full ${
          !disabled && 'drop-shadow-sm hover:drop-shadow'
        }`}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        readOnly={disabled}
        disabled={disabled}
        type={type}
      />
      {error && (
        <div className='justify-end px-4 flex flex-row items-center'>
          <Text
            color='text-red-500'
            size='text-xs md:text-sm'
          >
            <IoIosWarning />
          </Text>
          <Text
            color='text-red-500'
            size='text-xs md:text-sm'
          >
            {error}
          </Text>
        </div>
      )}
    </div>
  );
};

export default Field;

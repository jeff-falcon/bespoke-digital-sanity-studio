import { ReactElement, useCallback } from 'react';
import { set, unset, type StringInputProps } from 'sanity';

type ButtonProps = { checked?: boolean };

function Button_2_1({ checked = false }: ButtonProps) {
  return (
    <svg width="36" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={checked ? 'red' : 'black'} fill={checked ? 'rgb(255 0 0 / 0.5)' : 'none'}>
        <rect x="0.5" y="0.5" width="20" height="31" rx="1.5" />
        <rect x="27.5" y="0.5" width="20" height="13" rx="1.5" />
        <rect x="27.5" y="18.5" width="20" height="13" rx="1.5" />
      </g>
    </svg>
  );
}

function Button_1_2({ checked = false }: ButtonProps) {
  return (
    <svg width="36" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={checked ? 'red' : 'black'} fill={checked ? 'rgb(255 0 0 / 0.5)' : 'none'}>
        <rect x="0.5" y="0.5" width="20" height="13" rx="1.5" />
        <rect x="0.5" y="18.5" width="20" height="13" rx="1.5" />
        <rect x="27.5" y="0.5" width="20" height="31" rx="1.5" />
      </g>
    </svg>
  );
}

function Button_1_3({ checked = false }: ButtonProps) {
  return (
    <svg width="36" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={checked ? 'red' : 'black'} fill={checked ? 'rgb(255 0 0 / 0.5)' : 'none'}>
        <rect x="0.5" y="0.5" width="47" height="13" rx="1.5" />
        <rect x="0.5" y="18.5" width="12.3333" height="13" rx="1.5" />
        <rect x="17.833" y="18.5" width="12.3333" height="13" rx="1.5" />
        <rect x="35.167" y="18.5" width="12.3333" height="13" rx="1.5" />
      </g>
    </svg>
  );
}

function Button_3_1({ checked = false }: ButtonProps) {
  return (
    <svg width="36" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={checked ? 'red' : 'black'} fill={checked ? 'rgb(255 0 0 / 0.5)' : 'none'}>
        <rect x="0.5" y="0.5" width="12.3333" height="13" rx="1.5" />
        <rect x="17.833" y="0.5" width="12.3333" height="13" rx="1.5" />
        <rect x="35.167" y="0.5" width="12.3333" height="13" rx="1.5" />
        <rect x="0.5" y="18.5" width="47" height="13" rx="1.5" />
      </g>
    </svg>
  );
}

function Button_3_Across({ checked = false }: ButtonProps) {
  return (
    <svg width="36" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={checked ? 'red' : 'black'} fill={checked ? 'rgb(255 0 0 / 0.5)' : 'none'}>
        <rect x="0.5" y="0.5" width="12.3333" height="31" rx="1.5" />
        <rect x="17.833" y="0.5" width="12.3333" height="31" rx="1.5" />
        <rect x="35.167" y="0.5" width="12.3333" height="31" rx="1.5" />
      </g>
    </svg>
  );
}

function Button_2_Across({ checked = false }: ButtonProps) {
  return (
    <svg width="36" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={checked ? 'red' : 'black'} fill={checked ? 'rgb(255 0 0 / 0.5)' : 'none'}>
        <rect x="0.5" y="0.5" width="20" height="31" rx="1.5" />
        <rect x="27.5" y="0.5" width="20" height="31" rx="1.5" />
      </g>
    </svg>
  );
}

function Button_4_Across({ checked = false }: ButtonProps) {
  return (
    <svg width="36" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={checked ? 'red' : 'black'} fill={checked ? 'rgb(255 0 0 / 0.5)' : 'none'}>
        <rect x="0.5" y="0.5" width="8" height="31" rx="1.5" />
        <rect x="13.5" y="0.5" width="8" height="31" rx="1.5" />
        <rect x="26.5" y="0.5" width="8" height="31" rx="1.5" />
        <rect x="39.5" y="0.5" width="8" height="31" rx="1.5" />
      </g>
    </svg>
  );
}

function Button_1_Half_Half({ checked = false }: ButtonProps) {
  return (
    <svg width="36" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={checked ? 'red' : 'black'} fill={checked ? 'rgb(255 0 0 / 0.5)' : 'none'}>
        <rect x="0.5" y="0.5" width="20" height="31" rx="1.5" />
        <rect x="27.5" y="0.5" width="7.5" height="31" rx="1.5" />
        <rect x="40" y="0.5" width="7.5" height="31" rx="1.5" />
      </g>
    </svg>
  );
}

function Button_Half_Half_1({ checked = false }: ButtonProps) {
  return (
    <svg width="36" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={checked ? 'red' : 'black'} fill={checked ? 'rgb(255 0 0 / 0.5)' : 'none'}>
        <rect x="0.5" y="0.5" width="7.5" height="31" rx="1.5" />
        <rect x="13" y="0.5" width="7.5" height="31" rx="1.5" />
        <rect x="27.5" y="0.5" width="20" height="31" rx="1.5" />
      </g>
    </svg>
  );
}

function Button_One_Text({ checked = false }: ButtonProps) {
  return (
    <svg width="36" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={checked ? 'red' : 'black'} fill={checked ? 'rgb(255 0 0 / 0.5)' : 'none'}>
        <rect x="0.5" y="0.5" width="20" height="31" rx="1.5" />
        <rect x="27.5" y="0.5" width="20" height="31" rx="1.5" />
      </g>
      <path
        d="M31.3672 19L34.1162 11.8418H35.1367L38.0664 19H36.9873L36.1523 16.832H33.1592L32.373 19H31.3672ZM33.4326 16.0605H35.8594L35.1123 14.0781C34.8844 13.4759 34.7152 12.9811 34.6045 12.5938C34.5133 13.0527 34.3848 13.5085 34.2188 13.9609L33.4326 16.0605ZM42.0947 18.3604C41.7692 18.637 41.4551 18.8324 41.1523 18.9463C40.8529 19.0602 40.5306 19.1172 40.1855 19.1172C39.6159 19.1172 39.1781 18.9788 38.8721 18.7021C38.5661 18.4222 38.4131 18.0658 38.4131 17.6328C38.4131 17.3789 38.4701 17.1478 38.584 16.9395C38.7012 16.7279 38.8525 16.5586 39.0381 16.4316C39.2269 16.3047 39.4385 16.2087 39.6729 16.1436C39.8454 16.098 40.1058 16.054 40.4541 16.0117C41.1637 15.9271 41.6862 15.8262 42.0215 15.709C42.0247 15.5885 42.0264 15.512 42.0264 15.4795C42.0264 15.1214 41.9434 14.8691 41.7773 14.7227C41.5527 14.5241 41.2191 14.4248 40.7764 14.4248C40.363 14.4248 40.057 14.498 39.8584 14.6445C39.6631 14.7878 39.5182 15.0433 39.4238 15.4111L38.5645 15.2939C38.6426 14.9261 38.7712 14.6299 38.9502 14.4053C39.1292 14.1774 39.388 14.0033 39.7266 13.8828C40.0651 13.7591 40.4574 13.6973 40.9033 13.6973C41.346 13.6973 41.7057 13.7493 41.9824 13.8535C42.2591 13.9577 42.4626 14.0895 42.5928 14.249C42.723 14.4053 42.8141 14.6038 42.8662 14.8447C42.8955 14.9945 42.9102 15.2646 42.9102 15.6553V16.8271C42.9102 17.6442 42.9281 18.1618 42.9639 18.3799C43.0029 18.5947 43.0778 18.8014 43.1885 19H42.2705C42.1794 18.8177 42.1208 18.6045 42.0947 18.3604ZM42.0215 16.3975C41.7025 16.5277 41.224 16.6383 40.5859 16.7295C40.2246 16.7816 39.9691 16.8402 39.8193 16.9053C39.6696 16.9704 39.554 17.0664 39.4727 17.1934C39.3913 17.3171 39.3506 17.4554 39.3506 17.6084C39.3506 17.8428 39.4385 18.0381 39.6143 18.1943C39.7933 18.3506 40.0537 18.4287 40.3955 18.4287C40.734 18.4287 41.0352 18.3555 41.2988 18.209C41.5625 18.0592 41.7562 17.8558 41.8799 17.5986C41.9743 17.4001 42.0215 17.1071 42.0215 16.7197V16.3975Z"
        fill={checked ? 'white' : 'black'}
      />
    </svg>
  );
}

function Button_Text_One({ checked = false }: ButtonProps) {
  return (
    <svg width="36" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={checked ? 'red' : 'black'} fill={checked ? 'rgb(255 0 0 / 0.5)' : 'none'}>
        <rect x="0.5" y="0.5" width="20" height="31" rx="1.5" />
        <rect x="27.5" y="0.5" width="20" height="31" rx="1.5" />
      </g>
      <path
        d="M4.36719 19L7.11621 11.8418H8.13672L11.0664 19H9.9873L9.15234 16.832H6.15918L5.37305 19H4.36719ZM6.43262 16.0605H8.85938L8.1123 14.0781C7.88444 13.4759 7.71517 12.9811 7.60449 12.5938C7.51335 13.0527 7.38477 13.5085 7.21875 13.9609L6.43262 16.0605ZM15.0947 18.3604C14.7692 18.637 14.4551 18.8324 14.1523 18.9463C13.8529 19.0602 13.5306 19.1172 13.1855 19.1172C12.6159 19.1172 12.1781 18.9788 11.8721 18.7021C11.5661 18.4222 11.4131 18.0658 11.4131 17.6328C11.4131 17.3789 11.4701 17.1478 11.584 16.9395C11.7012 16.7279 11.8525 16.5586 12.0381 16.4316C12.2269 16.3047 12.4385 16.2087 12.6729 16.1436C12.8454 16.098 13.1058 16.054 13.4541 16.0117C14.1637 15.9271 14.6862 15.8262 15.0215 15.709C15.0247 15.5885 15.0264 15.512 15.0264 15.4795C15.0264 15.1214 14.9434 14.8691 14.7773 14.7227C14.5527 14.5241 14.2191 14.4248 13.7764 14.4248C13.363 14.4248 13.057 14.498 12.8584 14.6445C12.6631 14.7878 12.5182 15.0433 12.4238 15.4111L11.5645 15.2939C11.6426 14.9261 11.7712 14.6299 11.9502 14.4053C12.1292 14.1774 12.388 14.0033 12.7266 13.8828C13.0651 13.7591 13.4574 13.6973 13.9033 13.6973C14.346 13.6973 14.7057 13.7493 14.9824 13.8535C15.2591 13.9577 15.4626 14.0895 15.5928 14.249C15.723 14.4053 15.8141 14.6038 15.8662 14.8447C15.8955 14.9945 15.9102 15.2646 15.9102 15.6553V16.8271C15.9102 17.6442 15.9281 18.1618 15.9639 18.3799C16.0029 18.5947 16.0778 18.8014 16.1885 19H15.2705C15.1794 18.8177 15.1208 18.6045 15.0947 18.3604ZM15.0215 16.3975C14.7025 16.5277 14.224 16.6383 13.5859 16.7295C13.2246 16.7816 12.9691 16.8402 12.8193 16.9053C12.6696 16.9704 12.554 17.0664 12.4727 17.1934C12.3913 17.3171 12.3506 17.4554 12.3506 17.6084C12.3506 17.8428 12.4385 18.0381 12.6143 18.1943C12.7933 18.3506 13.0537 18.4287 13.3955 18.4287C13.734 18.4287 14.0352 18.3555 14.2988 18.209C14.5625 18.0592 14.7562 17.8558 14.8799 17.5986C14.9743 17.4001 15.0215 17.1071 15.0215 16.7197V16.3975Z"
        fill={checked ? 'white' : 'black'}
      />
    </svg>
  );
}

function Button_Single({ checked = false }: ButtonProps) {
  return (
    <svg width="36" height="24" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke={checked ? 'red' : 'black'} fill={checked ? 'rgb(255 0 0 / 0.5)' : 'none'}>
        <rect x="0.5" y="0.5" width="47" height="31" rx="1.5" />
      </g>
    </svg>
  );
}

// Maps layout values to their SVG icon components.
// Adjust the `value` strings to match your schema's `options.list` values.
const layoutOptions: { value: string; icon: (props: ButtonProps) => ReactElement }[] = [
  { value: 'one_two', icon: Button_2_1 },
  { value: 'two_one', icon: Button_1_2 },
  { value: 'one_three', icon: Button_1_3 },
  { value: 'three_one', icon: Button_3_1 },
  { value: 'two', icon: Button_2_Across },
  { value: 'three', icon: Button_3_Across },
  { value: 'four', icon: Button_4_Across },
  { value: 'one_half_half', icon: Button_1_Half_Half },
  { value: 'half_half_one', icon: Button_Half_Half_1 },
  { value: 'one_full', icon: Button_Single },
  { value: 'one_text', icon: Button_One_Text },
  { value: 'text_one', icon: Button_Text_One },
];

export function LayoutRadioInput(props: StringInputProps) {
  const { value, onChange, id } = props;

  const handleChange = useCallback(
    (newValue: string) => {
      onChange(newValue ? set(newValue) : unset());
    },
    [onChange],
  );

  function renderOptionRow(options: typeof layoutOptions) {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center',
          padding: '16px 8px',
          width: '100%',
          justifyContent: 'center',
          border: '1px solid var(--card-border-color)',
          borderRadius: '0.1875rem',
        }}
      >
        {options.map(({ value: optionValue, icon: Icon }) => {
          const inputId = `${id}-${optionValue}`;
          const isChecked = value === optionValue;
          return (
            <div key={optionValue} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label
                htmlFor={inputId}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <input
                  type="radio"
                  id={inputId}
                  name={id}
                  value={optionValue}
                  checked={isChecked}
                  onChange={() => handleChange(optionValue)}
                  style={{ position: 'absolute', opacity: 0, width: 0, height: 0, pointerEvents: 'none' }}
                />
                <Icon checked={isChecked} />
              </label>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <style>{`
      @media (prefers-color-scheme: dark) {
        .layout-btn-wrapper svg g[stroke="black"] { stroke: white; }
        .layout-btn-wrapper svg path[fill="black"] { fill: white; }
      }
    `}</style>
      <div
        className="layout-btn-wrapper"
        style={{
          display: 'grid',
          gap: '6px',
          justifyContent: 'start',
        }}
      >
        {renderOptionRow(layoutOptions)}
      </div>
    </>
  );
}

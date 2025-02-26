import { ChevronDownIcon } from '@heroicons/react/16/solid'

const numberNames = [
    "Thousand",
    "Million",
    "Billion",
    "Trillion",
    "Quadrillion",
    "Quintillion",
    "Sextillion",
    "Septillion",
    "Octillion",
    "Nonillion",
    "Decillion",
    "Undecillion",
    "Duodecillion",
    "Tredecillion",
    "Quattuordecillion",
    "Quindecillion",
    "Sexdecillion",
    "Septendecillion",
    "Octodecillion",
    "Novemdecillion",
    "Vigintillion",
    "Unvigintillion",
    "Duovigintillion",
    "Trevigintillion",
    "Quattuorvigintillion",
    "Quinquavigintillion",
    "Sexavigintillion",
    "Septavigintillion"
  ];

export default function ZenInputBoxes() {
    return (
        <div>
          <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
            Purple Zen (ZPS)
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-purple-400 pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
              <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">$</div>
              <input
                id="price"
                name="price"
                type="text"
                placeholder="0.00"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
              />
              <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="currency"
                  name="currency"
                  aria-label="Currency"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                    <option value="1">Thousand</option>
                    <option value="1e6">Million</option>
                    <option value="1e9">Billion</option>
                    <option value="1e12">Trillion</option>
                    <option value="1e15">Quadrillion</option>
                    <option value="1e18">Quintillion</option>
                    <option value="1e21">Sextillion</option>
                    <option value="1e24">Septillion</option>
                    <option value="1e27">Octillion</option>
                    <option value="1e30">Nonillion</option>
                    <option value="1e33">Decillion</option>
                    <option value="1e36">Undecillion</option>
                    <option value="1e39">Duodecillion</option>
                    <option value="1e42">Tredecillion</option>
                    <option value="1e45">Quattuordecillion</option>
                    <option value="1e48">Quindecillion</option>
                    <option value="1e51">Sexdecillion</option>
                    <option value="1e54">Septendecillion</option>
                    <option value="1e57">Octodecillion</option>
                    <option value="1e60">Novemdecillion</option>
                    <option value="1e63">Vigintillion</option>
                    <option value="1e66">Unvigintillion</option>
                    <option value="1e69">Duovigintillion</option>
                    <option value="1e72">Trevigintillion</option>
                    <option value="1e75">Quattuorvigintillion</option>
                    <option value="1e78">Quinquavigintillion</option>
                    <option value="1e81">Sexavigintillion</option>
                    <option value="1e84">Septavigintillion</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
          </div>
        </div>
      )
}
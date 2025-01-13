import { ChevronDownIcon } from '@heroicons/react/16/solid'

interface FormProps {
  handleZenFormChange: (key: string, value: number) => void;
  handleZenFormCalculate: () => void;
  calculateIsDisabled: boolean;
}

export default function ZenInputForm({
  handleZenFormChange,
  handleZenFormCalculate,
  calculateIsDisabled
}: FormProps){
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {/* Image/logo can go here */}
            <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-white">
              Zen Calc
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <form action="#" method="POST" className="space-y-6" onSubmit={(e) => {
        e.preventDefault();
        handleZenFormCalculate();
      }}>
              <div>
          <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
            Purple Zen Rate (ZPS)
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-purple-400 pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-purple-400">
              <input
                id="purpleZen"
                name="purpleZen"
                type="number"
                step={0.001}
                placeholder="0.00"
                onChange={(e) => handleZenFormChange("purpleZenAmount", Number(e.target.value))}
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
              />
              <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="purpleZenNumber"
                  name="purpleZenNumber"
                  defaultValue="1"
                  onChange={(e) => handleZenFormChange("purpleZenNumber", Number(e.target.value))}
                  className="col-start-1 rounded-r outline outline-1 -outline-offset-1 outline-gray-300 row-start-1 w-full appearance-none py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-purple-400 sm:text-sm/6"
                >
                    <option value="1e3">Thousand</option>
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
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
            Gold Zen Rate (APS)
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-yellow-400 pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-yellow-400">
              <input
                id="goldZen"
                name="goldZen"
                type="number"
                step={0.001}
                placeholder="0.00"
                onChange={(e) => handleZenFormChange("goldZenAmount", Number(e.target.value))}
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
              />
              <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="goldZenNumber"
                  name="goldZenNumber"
                  onChange={(e) => handleZenFormChange("goldZenNumber", Number(e.target.value))}
                  className="col-start-1 rounded-r outline outline-1 -outline-offset-1 outline-gray-300 row-start-1 w-full appearance-none py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-400 sm:text-sm/6"
                >
                    <option value="1e3">Thousand</option>
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
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
          </div>
        </div>
       
        <div>
          <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
            Amount Needed
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-green-600">
              <input
                id="amountNeeded"
                name="amountNeeded"
                type="number"
                step={0.001}
                placeholder="0.00"
                onChange={(e) => handleZenFormChange("amountNeeded", Number(e.target.value))}
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
              />
              <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="amountNeededNumber"
                  name="amountNeededNumber"
                  onChange={(e) => handleZenFormChange("amountNeededNumber", Number(e.target.value))}
                  className="col-start-1 rounded-r outline outline-1 -outline-offset-1 outline-gray-300 row-start-1 w-full appearance-none py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                >
                    <option value="1e3">Thousand</option>
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
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div>
                <button
                  className="disabled:bg-gray-400 diabled:cursor-not-allowed mt-16 flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  type="submit"
                  disabled={calculateIsDisabled}
                >
                  Calculate
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
  
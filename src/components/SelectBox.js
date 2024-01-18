import { useState } from "react";
import { selectList } from "../recoil/selectors/selector"
import { useRecoilValue } from "recoil"

export default function SelectBox() {

    // 첫번째 select box
    const selectData = useRecoilValue(selectList);

    // 두번째 select box
    const [selectedType, setSelectedType] = useState(selectData.type.default);

    console.log(selectData.type);
    console.log(selectData.type.default);

    console.log(selectData.type.options.food);
    return (
        <div className="w-96 h-96 m-auto mt-32 flex flex-col rounded-lg items-center bg-cyan-50">
            <div className="w-52 m-auto">
                <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                    My Select Box
                </label>
                <select
                    id="type"
                    name="type"
                    className="mt-5 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue= {selectData.type.default}
                    onChange={e => setSelectedType(e.target.value)}
                >
                    {
                        Object.keys(selectData.type.options).map((typeName) => (
                            <option value={typeName} key={typeName}>
                                {typeName}
                            </option>
                        ))    
                    }
                </select>
                <select
                    id="type"
                    name="type"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={selectData.type.options[selectedType].default}
                    >
                    {
                        selectData.type.options[selectedType].options.map((optionName) => (
                            <option value={optionName} key={optionName}>
                                {optionName}
                            </option>
                        ))
                    }
                </select>
                <select
                    id="location"
                    name="location"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue="Canada"
                >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </select>
            </div>
        </div>
    )
}

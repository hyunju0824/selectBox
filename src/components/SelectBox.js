import { selectList } from "../recoil/selectors/selector"
import { useRecoilValue } from "recoil"

export default function SelectBox() {
    const selectData = useRecoilValue(selectList);
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
                    defaultValue="Canada"
                >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
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

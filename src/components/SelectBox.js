import { useState, useEffect } from "react";
import { selectList } from "../recoil/selectors/selector"
import { useRecoilValue } from "recoil"

export default function SelectBox() {

    const selectData = useRecoilValue(selectList);

    // 1 번째 셀렉트 박스의 초기값 설정 
    const [selectedType, setSelectedType] = useState(selectData.type.default);
    // 2
    const [selectedFood, setSelectedFood] = useState(selectData.type.options[selectData.type.default].default);
    // 3
    const [selectedTaste, setSelectedTaste] = useState(selectData.taste[selectedFood].default);

    // 1 번째 셀렉트 박스의 선택이 바뀔 때마다 2,3 번째 셀렉트 박스의 값을 업데이트
    useEffect(() => {
        setSelectedFood(selectData.type.options[selectedType].default);
        setSelectedTaste(selectData.taste[selectData.type.options[selectedType].default].default);
    }, [selectedType]);

    // 2 번째 셀렉트 박스의 선택이 바뀔 때마다 3 번째 셀렉트 박스의 값을 업데이트
    useEffect(() => {
        setSelectedTaste(selectData.taste[selectedFood].default);
    }, [selectedFood]);

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
                    defaultValue={selectData.type.default}
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
                    id="food"
                    name="food"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={selectedFood}
                    onChange={e => setSelectedFood(e.target.value)}
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
                    id="taste"
                    name="taste"
                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={selectedTaste}
                    onChange={e => setSelectedTaste(e.target.value)}
                >
                    {
                        selectData.taste[selectedFood].options.map((optionName) => (
                            <option value={optionName} key={optionName}>
                                {optionName}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

"use client"
import { SearchBookProps } from '@/types';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, ComboboxButton } from '@headlessui/react';
import { useState } from 'react';
import { manufacturers } from '@/constants';

const SearchBook = ({book, setBook}: SearchBookProps) => {
    
    const [query, setQuery] = useState("");

    const filteredManufacturers = 
        query === "" 
            ? manufacturers 
            : manufacturers.filter((item) => (
                item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
            ))

    return (
        <div className="search-manuafacturer">
            <Combobox value={book} onChange={setBook} onClose={() => setQuery('')}>
                <div className="relative w-full">
                    <ComboboxButton className="absolute top-[14px]">
                    </ComboboxButton>
                    <ComboboxInput
                    className="search-manufacturer__input"
                    placeholder="Enter book title here"
                    displayValue={(book: string) => book}
                    onChange={(e) => setQuery(e.target.value)}>
                    </ComboboxInput>
                </div>
            
                <ComboboxOptions>
                    {
                        filteredManufacturers.map((item) => (
                            <ComboboxOption 
                            key={item}
                            className={({focus}) => `relative search-manufacturer__option ${focus ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                            value={item}
                            >
                                {item}
                            </ComboboxOption>
                        ))
                    }
                </ComboboxOptions>
            </Combobox>
        </div>
    );
}

export default SearchBook
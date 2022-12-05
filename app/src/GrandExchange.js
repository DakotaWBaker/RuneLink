import React from "react";
import {useEffect, useState} from 'react'
import AllItems from "./AllItems";
import SearchItems from "./SearchItems";

export default function GrandExchange({
  items,
  setPage,
  pagination,
  getSearchData,
  searchItems
}) {
  const [searchOrList, setSearchOrList] = useState ('List')
  console.log(searchOrList)
  if (searchOrList === 'List') {
    return <AllItems
    items = {items}
    setPage = {setPage}
    pagination = {pagination}
    getSearchData = {getSearchData}
    setSearchOrList = {setSearchOrList}
    />
  }
  else if (searchOrList === 'Search') {
    return <SearchItems 
    searchItem = {searchItems}
    getSearchData = {getSearchData}
    setSearchOrList = {setSearchOrList}
   
    />
  }

}

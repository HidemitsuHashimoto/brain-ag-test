import { createContext, useContext, useState } from "react";

enum ActiveTab {
  Dash = 'dash',
  Form = 'Form',
}

type TabContextProps = {
  activeTab: ActiveTab;
  setTab?: (tabId?: ActiveTab) => void;
}

const TabContext = createContext<TabContextProps>({
  activeTab: ActiveTab.Dash,
})

type TabContextProviderProps = {
  children: React.ReactNode
}
export function TabContextProvider({ children }: TabContextProviderProps) {
  const [activeTab, setActiveTab] = useState(ActiveTab.Dash)

  function setTab(tabId?: ActiveTab) {
    if(tabId)
      setActiveTab(tabId);
  }

  return (
    <TabContext.Provider value={{ activeTab, setTab }}>{children}</TabContext.Provider>
  )
}

export const useTabContext = () => useContext(TabContext)
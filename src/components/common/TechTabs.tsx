// 'use client'

// import {
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from '@material-tailwind/react'
// import { twMerge } from 'tailwind-merge'
// import { techIcons } from '@/utils/constant/TechIcons'

// export function TechTabs() {
//   const data = [
//     {
//       label: 'Languages',
//       value: 'Languages',
//       dataTech: techIcons.language,
//     },
//     {
//       label: 'Frameworks',
//       value: 'Frameworks',
//       dataTech: techIcons.framework,
//     },
//     {
//       label: 'Tools',
//       value: 'reacts',
//       dataTech: techIcons.tools,
//     },
//   ]

//   return (
//     <Tabs value="Languages">
//       <TabsHeader>
//         {data.map(({ label, value }) => (
//           <Tab key={value} value={value} className="">
//             {label}
//           </Tab>
//         ))}
//       </TabsHeader>
//       <TabsBody className="">
//         {data.map(({ value, dataTech }) => (
//           <TabPanel
//             key={value}
//             value={value}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             {dataTech.map((data, index) => {
//               const Icons = data.icons
//               return (
//                 <div
//                   key={index}
//                   className={twMerge(
//                     `flex h-28 w-28 flex-col items-center justify-center gap-y-2 rounded-2xl border-2 bg-white duration-150 hover:scale-105 hover:border-deep-sea hover:shadow-button-card md:h-36 md:w-36 md:p-4`,
//                   )}
//                 >
//                   <Icons
//                     className={twMerge(
//                       `text-4xl text-deep-sea md:text-6xl`,
//                     )}
//                   />
//                   <p className="text-base font-bold text-deep-sea md:text-xl">
//                     {data.name}
//                   </p>
//                 </div>
//               )
//             })}
//           </TabPanel>
//         ))}
//       </TabsBody>
//     </Tabs>
//   )
// }

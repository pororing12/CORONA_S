import React from 'react';


function Main({ total_count, contact_count }) {
    const totalCount = total_count
    alert(typeof totalCount)
    totalCount = Number(totalCount)
    alert(typeof totalCount)

    const contactCount = contact_count
    alert(typeof contactCount)
    contactCount = Number(contactCount)
    alert(typeof contactCount)

    const total = totalCount + contactCount
    return (
        <>
            <div>
                총 확진자 : {total}
            </div>
        </>
    )
}


export default Main;
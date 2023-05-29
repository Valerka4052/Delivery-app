

export const OrderCart = () => {

    return (
        <div style={{display:"flex"}}>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/9/90/No_image_available_600_x_400.svg" alt="image" width={300}height={200} /></div>
            <div>
                <p>burger</p><p>prise 300$</p>
                <input type="number" name="count" min={1} placeholder="1"/>
            </div>
        </div>
          
    )
}
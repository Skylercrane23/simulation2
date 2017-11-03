SELECT properties.prop_name, properties.prop_desc, properties.address, properties.city, properties.state, properties.zip, properties.img_url, properties.loan_tot, properties.mortgage, properties.desired_rent
FROM properties 
JOIN users ON properties.user_id = users.user_id
WHERE user_id = $1;

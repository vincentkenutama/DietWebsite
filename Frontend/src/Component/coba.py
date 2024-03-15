def map_value_to_microseconds(value):
    # Define the input range
    input_range = (-1024, 1024)
    
    # Define the range of microseconds you want to map to
    microseconds_range = (1000, 2000)
    
    # Calculate the slope and intercept of the linear mapping
    slope = (microseconds_range[1] - microseconds_range[0]) / (input_range[1] - input_range[0])
    intercept = microseconds_range[0] - slope * input_range[0]
    
    # Map the value using the linear equation
    mapped_micros = slope * value + intercept
    
    return mapped_micros

# Test the function with value 0
print(f"Value: 0, Mapped Microseconds: {map_value_to_microseconds(0)}")

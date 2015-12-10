require '../shared/read_file.rb'

input = read_file('input.txt')

# part 1

def get_current_floor(chars)
  current_floor = 0

  chars.each_char do |char|
    if char === '('
      current_floor += 1
    elsif char === ')'
      current_floor -= 1
    end
  end

  current_floor
end

# part 2

def find_basement_position(chars)
  current_floor = 0
  position = 0

  chars.each_char.with_index(1) do |char, i|
    if char === '('
      current_floor += 1
    elsif char === ')'
      current_floor -= 1
    end

    position = i

    if current_floor === -1
      return position
    end
  end

  position
end


current_floor = get_current_floor(input)
puts current_floor

basement_position = find_basement_position(input)
puts basement_position

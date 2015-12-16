require "../shared/read_file.rb"

input = read_file("input.txt")

# part 1

def calculate_wrapping_paper_sum(input)
  presents = parse_presents(input)
  wrapping_paper_sum = 0

  presents.each do |present|
    present_spec = parse_present_dimension(present)

    wrapping_paper_sum += calculate_wrapping_paper_per_present(present_spec)
  end

  wrapping_paper_sum
end

def calculate_wrapping_paper_per_present(spec)
  side_one = spec[:length] * spec[:width]
  side_two = spec[:width] * spec[:height]
  side_three = spec[:height] * spec[:length]
  smallest_side = [side_one, side_two, side_three].min

  (2 * side_one) + (2 * side_two) + (2 * side_three) + smallest_side
end

# part 2

def calculate_ribbon_sum(input)
  presents = parse_presents(input)
  ribbon_sum = 0

  presents.each do |present|
    present_spec = parse_present_dimension(present)

    ribbon_sum += calculate_ribbon_sum_per_present(present_spec)
  end

  ribbon_sum
end

def calculate_ribbon_sum_per_present(spec)
  sides = [spec[:length], spec[:width], spec[:height]]
  smallest_two_sides = find_smallest_two_sides(sides)
  smallest_perimeter = calculate_smallest_perimeter(smallest_two_sides)
  bow = spec[:length] * spec[:width] * spec[:height]

  smallest_perimeter + bow
end

def find_smallest_two_sides(sides)
  sorted = sides.sort do |a, b|
    a - b
  end

  [sorted[0], sorted[1]]
end

def calculate_smallest_perimeter(sides)
  side_one = sides[0]
  side_two = sides[1]

  side_one + side_one + side_two + side_two
end

# helpers

def parse_presents(present_string)
  presents = present_string.split("\n")

  presents
end

def parse_present_dimension(present)
  present_dimensions = present.split("x")

  return {
    length: present_dimensions[0].to_i,
    width: present_dimensions[1].to_i,
    height: present_dimensions[2].to_i
  }
end

puts "Part 1: #{calculate_wrapping_paper_sum(input)}"
puts "Part 2: #{calculate_ribbon_sum(input)}"

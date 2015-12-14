require "../shared/read_file.rb"

FILE_NAME = "input.txt"
input = read_file(FILE_NAME)

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

# helpers

def calculate_wrapping_paper_per_present(spec)
  side_one = spec[:length] * spec[:width]
  side_two = spec[:width] * spec[:height]
  side_three = spec[:height] * spec[:length]
  smallest_side = [side_one, side_two, side_three].min

  (2 * side_one) + (2 * side_two) + (2 * side_three) + smallest_side
end

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
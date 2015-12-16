require "../shared/read_file.rb"
require "set"

input = read_file("input.txt")

def count_houses_visited(input, num_santas = 1)
  visited = Set.new
  santa_tracker = build_santa_tracker(num_santas)

  input.each_char.with_index do |char, i|
    loc = santa_tracker[i % num_santas];

    if char === "^"
      loc[0] += 1
    elsif char === "v"
      loc[0] -= 1
    elsif char === ">"
      loc[1] += 1
    elsif char === "<"
      loc[1] -= 1
    end

    visited.add(loc.join(","))
  end

  visited.size
end

# helpers

def build_santa_tracker(n)
  santa_tracker = Hash.new

  n.times do |n|
    santa_tracker[n] = [0, 0]
  end

  santa_tracker
end

puts "Part 1: #{count_houses_visited(input)}"
puts "Part 2: #{count_houses_visited(input, 2)}"

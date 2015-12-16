require "../shared/read_file.rb"
require "set"

FILE_NAME = "input.txt"
input = read_file(FILE_NAME)

def count_houses_visited(input, num_santas = 1)
  visited = Set.new
  santa_tracker = build_santa_tracker(num_santas)

  input.each_char.with_index do |char, i|
    loc = santa_tracker[i % num_santas];

    if char === '^'
      loc[0] += 1
    elsif char === 'v'
      loc[0] -= 1
    elsif char === '>'
      loc[1] += 1
    elsif char === '<'
      loc[1] -= 1
    end

    visited.add(loc.join(','))
  end

  visited.size
end

# helpers

def build_santa_tracker(n)
  santa_tracker = {}

  n.times do |n|
    santa_tracker[n] = [0, 0]
  end

  santa_tracker
end

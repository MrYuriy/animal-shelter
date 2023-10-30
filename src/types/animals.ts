export type Gender = 'Male' | 'Female';
export type AnimalType = 'dog' | 'cat';

export interface Animals {
  id: number,
  age?: string,
  gender: Gender,
  breed: string | null,
  name: string,
  phoneNumber: string,
  image: string
  animal_type: AnimalType,
}

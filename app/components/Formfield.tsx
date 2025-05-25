import { FormDescription, FormItem, FormLabel } from '@/components/ui/form'
import React from 'react'
import {FormControl, FormMessage} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Controller,FieldValues, Path, Control } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues>{
  control:Control<T>;
  name: Path<T>;
  label:string;
  placeholder? :string;
  type? :'email' | 'text' | "password" | 'file';
}

const Formfield = ({control,name,placeholder,label,type='text'}:FormFieldProps<T>) => (
  <Controller name={name} control={control} render={({field}) =>(
  <FormItem>
              <FormLabel className='label'>{label}</FormLabel>
              <FormControl>
                <Input className='input' placeholder={placeholder} type={type} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>

           
          )}
        />
)
 

export default Formfield

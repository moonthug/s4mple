// 'use server';
//
// import { CreatePropagationFormData } from '@/components/forms/CreatePropagationForm';
// import { graphql } from '@/graphql/generated/gql';
// import { getClient } from '@/lib/apollo';
//
//
// const CreatePropagation_Mutation = graphql(`
//   mutation CreatePropagation($input: [PropagationCreateInput!]!) {
//     createPropagations(input: $input) {
//       propagations {
//         id
//       }
//     }
//   }
// `);
//
// type CreatePropagationActionOptions = CreatePropagationFormData & {
//   parentId: string, parentType: string
// }
//
// /**
//  * @TODO Work in progress!!!
//  *
//  * @param {CreatePropagationActionOptions} options
//  * @returns {Promise<any>}
//  */
// export async function createPropagationAction(options: CreatePropagationActionOptions) {
//   const { recipeId, parentType, parentId } = options;
//
//   const [createPropagation, {
//     data,
//     loading,
//     error
//   }] = await getClient().mutate({ mutation: CreatePropagation_Mutation });
//
//   const additionalRelationship = parentType === 'plate'
//     ? { plate: { connect: { where: { node: { id: parentId } } } } }
//     : { sample: { connect: { where: { node: { id: parentId } } } } };
//
//   const result = await createPropagation({
//     variables: {
//       input: {
//         recipe: {
//           connect: {
//             where: {
//               node: {
//                 id: recipeId
//               }
//             }
//           }
//         },
//         ...additionalRelationship
//       }
//     }
//   });
//
//   // Invalidate cache
//
//   return result;
// }
